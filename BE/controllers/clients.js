var express = require('express');
require("dotenv").config();
const Match = require("../model/match_table");
const User = require("../model/user");
const Session = require("../model/session");
const records = require("../model/mrecord");
const clientLedger = require("../model/client_ledger");
const Login = require("../model/login_report");
const match_bhav = require("../model/mbhav");
const Bet = require("../model/bets");
const auth = require("../middleware/auth");
var sessionCheck= require('../middleware/tokencheck');
const tool = require("../tools");
const app = express();
app.use(express.json());
const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken");
var multer  = require('multer'); 
const path = require('path'); 
var uploads = multer({storage:storage});
var storage = multer.diskStorage({  
destination:(req,file,cb)=>{  
cb(null, path.join(__dirname, '../public/asset/'));
},filename:(req,file,cb)=>{  
cb(null, Date.now() + file.originalname);  
}  
});

var upload = multer({storage:storage}); 
const fs = require('fs');

app.use(function(req, res, next) {
  res.locals.user = req.session.userdetail;
  next();
});


// api for client login
app.post("/login", upload.none(), async (req,res)=>{
   try{
       const {uid,password} = req.body;
       if(!(uid && password)){
           res.status(200).send({status:200,message:"Input insufficient",success:false,data:null});
       }
       const user = await User.findOne({uid : uid, password : password, status : "active", role:'client'}).exec();
       const count = await Login.estimatedDocumentCount()+1;
       var today = new Date();
       var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
       var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
       var dateTime = date+' '+time;
       
       await Login.create({
           id : count,
           uid,
           ip : req.ip,
           date_time : dateTime,
       });
       
       console.log(user);
       if(!user){
          res.status(401).json({status:401,message:"Invalid Credentials",success:false}); 
       }
       const token = jwt.sign(
      { user_id: user._id, uid:user.uid, role:user.role},
      process.env.TOKEN_KEY,
      {
        expiresIn: "20h",
      }
    );
    user.token = token;
      res.status(200).json({status:200, message:"Client logged-in", success:true, data:user});
   } catch(err){
       console.log(err);
       res.status(200).json({staus:200,message:'Internal server error',success:false, data:err});
   }
});



// returns a list of all matches in-play
app.get("/in-play",sessionCheck.isClient, upload.none(), async(req,res)=>{
   try{
       const matches = await Match.find({status:"active"});
       console.log(matches.length);
       if(matches.length<1){
           res.status(200).json({status:200,message:"No match in-play",success:false,data:null});
       }else{
        //    const pagedata = tool.paginatedResult(matches,page,limit);
           res.status(200).json({status:200,message:"Matches in-play",success:true,data:matches});
       }
   } catch(err){
       console.log(err);
       res.status(200).json({staus:200,message:'Internal server error',success:false, data:err});
   }
});


// MATCH SECTION
// returns details about a particular match
app.get('/match', sessionCheck.isClient, upload.none(), async (req,res)=>{
   try{
       const match_id = req.body.match_id;
       const match = await Match.findOne({market_id:match_id});
       if(!match){
           res.status(200).json({status:200,message:"No match corresponds to this match_id",success:false,data:null});
       }else{
           res.status(200).json({status:200,message:"Match data found",success:true,data:match});
       }
   } catch(err){
       console.log(err);
       res.status(200).json({staus:200,message:'Internal server error',success:false, data:err});
   }
});


// var rate=0.00;
// var toppos=0;
// var botpos=0;


// api for placing a match bet
app.post("/match-bid",sessionCheck.isClient ,upload.none(), async (req, res) => {
    try {
     let { market_id, rate, amount, mode, state } = req.body;
    if(!(rate, amount && mode && state)){
        return res.status(200).json({status:200, message:"All input is required",success:false,data:null});
    }
    rate = parseFloat(rate);
    amount = parseInt(amount);
    var result = Tool.createBid(rate, amount, mode, state);

    const data = [result[0], result[1]] ;
    const id = await Bet.estimatedDocumentCount()+1;
    const bet = await Bet.create({
        id,
        bet_type:"match",
        client_uid:req.user.uid,
        market_id,
        rate,
        amount,
        mode,
        state,
        top_position:result[0],
        bottom_position:result[1]
    });
    res.status(201).json({status:201,message:"Bet placed",data:bet});
     }catch(err){
         console.log(err);
         res.status(200).json({staus:200,message:'Internal server error',success:false, data:err});
     }
});


// api for placing a session bet
app.post("/session-bid",sessionCheck.isClient,upload.none(), async (req,res)=>{
   try{
       var {market_id,session_id,amount} = req.body;
       if(!(market_id&&session_id)){
           res.status(200).json({status:200,message:"In-sufficient data",success:false,data:null});
       }else{
           const session = await Session.findOne({id:session_id});
           
           const id = await Bet.estimatedDocumentCount()+1;
           await Bet.create({
               id,
               market_id,
               client_uid:req.user.uid,
               bet_type:"session",
               amount,
               name:session.name
           });
           const bet = await Bet.find({id});
           console.log(bet);
           res.status(201).json({status:201,message:"Bet placed",success:true,data:bet});
       }
   } catch(err){
       console.log(err);
       res.status(200).json({staus:200,message:'Internal server error',success:false, data:err});
   }
});

//  returns a list of all bets placed by a client on a particular match
app.get("/bets",sessionCheck.isClient,upload.none(), async(req,res)=>{
   try{
       const {page,limit} = req.query;
       const {market_id} = req.body;
       const uid = req.user.uid;
       const bets = await Bet.find({uid,market_id});
       if(bets.length<1){
           res.status(200).json({status:200,message:"No bets placed",success:true,data:null});
       }else{
           const pagedata = tool.paginatedResult(bets,page,limit)
           res.status(200).json({status:200,message:"Bets placed in this match : "+bets.length, success:true,data:pagedata});
       }
   }catch(err){
         console.log(err);
         res.status(200).json({staus:200,message:'Internal server error',success:false, data:err});
   }
});


//  returns a list of all match bets placed for a particular match
app.get("/match-bets",sessionCheck.isClient,upload.none(),async(req,res)=>{
   try{
       const {page,limit} = req.query;
       const {market_id} = req.body;
       const match = await Match.findOne({market_id});
       if(!match){
           res.status(200).json({status:200,message:"Invalid market_id",success:false,data:null});
       }else{
        const match_bets = await Bet.find({market_id,bet_type:"match"});
       if(match_bets.length<1){
           res.status(200).json({status:200,message:"No match-bets palced",success:false,data:null});
       }else{
           const pagedata = tool.paginatedResult(match_bets,page,limit)
           res.status(200).json({status:200,message:"Match bets",success:true,data:pagedata});
       }   
       }
   } catch(err){
         console.log(err);
         res.status(200).json({staus:200,message:'Internal server error',success:false, data:err});
   }
});

//  returns a list of all session bets assigned to a particular match
app.get("/session-bets",sessionCheck.isClient,upload.none(),async(req,res)=>{
   try{
       const {page,limit} = req.query;
       const {market_id} = req.body;
       const match = await Match.findOne({market_id});
       if(!match){
           res.status(200).send({status:200,message:"Invalid market_id",success:false,data:null});
       }else{
        const session_bets = await Bet.find({market_id,bet_type:"session"});
       if(session_bets.length<1){
           res.status(200).json({status:200,message:"No session-bets palced",success:false,data:null});
       }else{
           const pagedata = tool.paginatedResult(session_bets,page,limit)
           res.status(200).json({status:200,message:"Session bets",success:true,data:pagedata});
       }   
       }
   } catch(err){
         console.log(err);
         res.status(200).json({staus:200,message:'Internal server error',success:false, data:err});
   }
});

// PROFILE SECTION
// returns details about a client account 
app.get("/profile",sessionCheck.isClient,upload.none(), async (req,res)=>{
   try{
       const uid = req.user.uid;
       const user = await User.findOne({uid});
       if(!user){
           res.status(200).json({sttus:200,message:"No user corresponding to this id",success:false,data:null});
       }else{
       res.status(200).json({status:200,message:"client data",success:true,data:user});    
       }
   } catch(err){
         console.log(err);
         res.status(200).json({staus:200,message:'Internal server error',success:false, data:err});
   }
});


// complete match section
app.get("/complete-matches",sessionCheck.isClient,upload.none(),async (req,res)=>{
   try{
       const {page,limit} = req.query;
       const client_uid = req.user.uid;
       const bets = await Bet.find({client_uid});
       if(bets.length<1){
           res.status(200).json({status:200,message:"No bets placed",success:false,data:null});
       }else{
           const pagedata = tool.paginatedResult(bets,page,limit);
           res.status(200).json({status:200,message:"All bets placed",success:true,data:pagedata});
       }
   } catch(err){
         console.log(err);
         res.status(200).json({staus:200,message:'Internal server error',success:false, data:err});
   }
});


// api to change password of a client account
app.post("/change-password",sessionCheck.isClient, upload.none(), async (req,res)=>{
   try{
       const uid = req.user.uid;
       const {current_pass,new_pass, confirm} = req.body;
       const user = await User.findOne({uid:uid,password:current_pass});
      
      if(!user){
          res.status(409).json({status:409,message:"Enter valid current password",success:false,data:null});
      }else{
       if(new_pass==confirm){
          await User.updateOne({uid},{$set:{password:new_pass}}).exec();
          res.status(201).json({status:201,message:"Password update success",success:true,data:null});
      }
      else{
          res.status(409).json({status:409,message:"Passwords miss-match, enter again.",success:false,data:null});
      }   
      }
   } catch(err){
       console.log(err);
       res.status(200).json({status:200, message:"Internal server error", success:false, data:err});
   }
});

// LEDGER
app.get("/ledger",sessionCheck.isClient, upload.none(), async (req,res)=>{
   try{
       const {page,limit} = req.query;
       const client_uid = req.user.uid;
       const client = await User.findOne({uid:client_uid});
       const result= await clientLedger.aggregate([
        { $match : {client_uid:req.user.uid}},
        { $group : {_id:1, total_credit:{$sum:"$won"}, total_debit:{$sum:"$lost"}}}
    ])
      let total_credit = 0;
      let total_debit = 0;
      const data = await clientLedger.find({client_uid}).sort({id:-1});
      let balance = 0;
      let wonSum = 0;
      let lossSum = 0
      data.map( e => {
        wonSum += e.won
        lossSum += e.lost
      })
      total_credit = wonSum
      total_debit = lossSum
     balance = wonSum - lossSum;
       if(data.length<1){
           res.status(200).json({status:200,message:"No ledger data",success:false,data:null});
       }else{
           const pagedata = tool.paginatedResult(data,page,limit);
           res.status(200).json({status:200,message:"Ledger data for client : "+client_uid, success : true, total_credit : total_credit,total_debit : total_debit, balance : balance, data : pagedata});
       }
   } catch(err){
         console.log(err);
         res.status(200).json({staus:200,message:'Internal server error',success:false, data:err});
   }
});

module.exports = app;
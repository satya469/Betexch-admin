const mongoose = require("mongoose");

const betSchema = new mongoose.Schema({
   id:{
       type: String,
       required: true
   },
   bet_type:{
     type:String   
   },
   client_uid:{
       type: String,
       require:true
   },
   market_id:{
       type: String,
       required:true
   },
   amount:{
       type: Number,
       required: true
   },
   
   
// for match-bet
   rate:{type: String},
   mode:{type: String},
   
   state:{type: String},
   top_position:{type: Number},
   bottom_position:{type: Number},
   
   
// for session-bet
    manual_id:{type:Number},
    name: {type:String, default:null},
    
});

betSchema.set('timestamp','true');
module.exports = mongoose.model('bets',betSchema);
var express = require('express');
require("dotenv").config();
const Match = require("../model/match_table");
const User = require("../model/user");
const Session = require("../model/session");
const records = require("../model/mrecord");
const match_bhav = require("../model/mbhav");
const Owner = require("../model/owner");
const auth = require("../middleware/auth");
var sessionCheck = require('../middleware/tokencheck');
var tool = require("../tools");
const cron = require("node-cron");
var axios = require('axios')
const app = express();
app.use(express.json());
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var multer = require('multer');
const path = require('path');
var uploads = multer({ storage: storage });
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/asset/'));
    }, filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});

var upload = multer({ storage: storage });
const fs = require('fs');

app.use(function (req, res, next) {
    res.locals.user = req.session.userdetail;
    next();
});

app.get('/get-match-list', (req, res) => {
    let data
    axios.get('http://marketsarket.in:3000/getcricketmatches').then((resp) => {
        data = resp.data
        res.status(200).json({ status: 200, data });
    })
})

//  api to create a new owner account 
app.post("/register", upload.none(), async (req, res) => {
    try {
        let count = await Owner.estimatedDocumentCount();
        const id = count + 1;

        const { username, first_name, last_name, password, contact_no } = req.body;
        if (!(username, first_name, last_name, password, contact_no)) {
            res.status(400).json({ status: 400, message: "All input required", success: false });
        }
        // const oldOwner = await Owner.find({email});
        // if(oldOwner.length>1){
        //     console.log(oldOwner);
        //     return res.status(409).json({status:409, message:"Owner Already Exist. Please Login", success:false, data:oldOwner});
        // }

        const status = "active";
        const role = "owner";

        const owner = await Owner.create({
            id,
            username,
            first_name,
            last_name,
            status,
            role,
            password,
            contact_no
        });
        const token = jwt.sign(
            { owner_id: owner._id, username, role },
            process.env.TOKEN_KEY,
            {
                expiresIn: "20h",
            }
        );
        owner.token = token;
        res.status(201).json({ status: 201, message: "Owner creation successful", success: true, data: owner });
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: err });
    }
});

//  api for owner login
app.post("/login", upload.none(), async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!(username && password)) {
            res.status(400).json({ status: 400, message: "All input is required", success: false });
        }
        const owner = await Owner.findOne({ username: username, password: password, role: 'owner' });
        if (!owner) {
            res.status(401).json({ status: 401, message: "Invalid Credentials", success: false });
        }

        const token = jwt.sign(
            { owner_id: owner._id, username, role: owner.role },
            process.env.TOKEN_KEY,
            {
                expiresIn: "20h",
            }
        );
        owner.token = token;
        res.status(200).json({ status: 200, message: "Owner logged in", success: true, data: owner });
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: err });
    }
});


app.get("/welcome", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const data = await Owner.find({ _id: req.user.owner_id });
        res.status(200).json({ status: 200, message: "Owner logged in", success: true, data: data });
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: null })
    }
});

// DASHBOARD
//  returns a list of all pending sessions
app.get("/pending-sessions", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const { page, limit } = req.query;
        const psession = await Session.find({ status: "pending" });
        console.log("session count :" + psession.length);
        if (psession.length < 1) {
            res.status(403).json({ status: 403, message: "No session data found", success: false, data: null });
        }
        else {
            const pagedata = tool.paginatedResult(psession, page, limit);
            res.status(200).json({ status: 200, message: "Pending sessions data", success: true, data: pagedata });
        }
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: null })
    }
});

//  returns a list of all complete matches 
app.get("/complete-matches", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const { page, limit } = req.query;
        const matches = await Match.find({ status: "complete" });
        console.log(matches.length);
        if (matches.length < 1) {
            res.status(403).json({ status: 403, message: "No match data found", success: false, data: null });
        }
        else {
            const pagedata = tool.paginatedResult(matches, page, limit);
            res.status(200).json({ status: 200, message: "Total matches completed : " + matches.length, success: true, data: pagedata });
        }
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: err });
    }
});

//add matches in inplay
app.post('/add-inplay', sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        console.log('inplay added----------->', req.body);
        let datetime = req.body.eventName.split('/')
        let eventNames = datetime[0].split('v')
        let first_team_name = eventNames[0]
        let second_team_name = eventNames[1]
        let match_datetime = datetime[1]

        console.log('------------->',first_team_name, '---------->',second_team_name);
        console.log('------------->',match_datetime);
        const { gameId, marketId, eventName } = req.body
        const count = await Match.estimatedDocumentCount();
        const match_inplay = await Match.create({
            match_id: count + 1,
            game_id : gameId,
            marketId,
            match_name : eventName,
            first_team_name,
            second_team_name,
            status: 'active',
            match_datetime
        })
        res.status(201).json({ status: 201, message: "InPlay entry success", success: true, data: match_inplay });
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: err });
    }
})


//  returns a list of all matches in-play
app.get("/inplay-matches", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const matches = await Match.find({ status: "active" });
        if (matches.length < 1) {
            res.status(403).json({ status: 403, message: "No match data found", success: false, data: null });
        }
        else {
            res.status(200).json({ status: 200, message: "Total matches in-play : " + matches.length, success: true, matches });
        }
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: err });
    }
});


//  retruns a list of all upcoming matches
app.get("/upcoming-matches", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const { page, limit } = req.query;
        const matches = await Match.find({ status: "inactive" });
        console.log(matches.length);
        if (matches.length < 1) {
            res.status(403).json({ status: 403, message: "No match data found", success: false, data: null });
        }
        else {
            const pagedata = tool.paginatedResult(matches, page, limit);
            res.status(200).json({ status: 200, message: "Total upcoming matches : " + matches.length, success: true, data: pagedata });
        }
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: null });
    }
});

//  returns a list of all client 
app.get("/total-clients", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const { page, limit } = req.query;
        const clients = await User.find({ role: "client" });
        if (clients.length < 1) {
            res.status(403).json({ status: 403, message: "No client data found", success: false, data: null });
        }
        else {
            const pagedata = tool.paginatedResult(clients, page, limit);
            res.status(200).json({ status: 200, message: "Total clients : " + clients.length, success: true, data: pagedata });
        }

    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: null });
    }
});


// returns a list of all agents 
app.get("/total-agents", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const { page, limit } = req.query;
        const agents = await User.find({ role: "agent" });
        if (agents.length < 1) {
            res.status(403).json({ status: 403, message: "No agent data found", success: false, data: null });
        }
        else {
            const pagedata = tool.paginatedResult(agents, page, limit);
            res.status(200).json({ status: 200, message: "Total agents : " + agents.length, success: true, data: pagedata });
        }

    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: null });
    }
});


//  returns a list of all stokists/superagents
app.get("/total-stokists", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const { page, limit } = req.query;
        const stokists = await User.find({ role: "superagent" });
        if (stokists.length < 1) {
            res.status(403).json({ status: 403, message: "No stokist data found", success: false, data: null });
        }
        else {
            const pagedata = tool.paginatedResult(stokists, page, limit)
            res.status(200).json({ status: 200, message: "Total stokists : " + stokists.length, success: true, data: pagedata });
        }

    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: null });
    }
});


//  returns a list of all senior stokists/masters
app.get("/total-seniorStokists", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const { page, limit } = req.query;
        const seniorStokists = await User.find({ role: "master" });
        if (seniorStokists.length < 1) {
            res.status(403).json({ status: 403, message: "No senior stokist data found", success: false, data: null });
        }
        else {
            const pagedata = tool.paginatedResult(seniorStokists, page, limit);
            res.status(200).json({ status: 200, message: "Total senior stokists : " + seniorStokists.length, success: true, data: pagedata });
        }

    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: null });
    }
});


//  returns a list of all admins
app.get("/total-admins", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const { page, limit } = req.query;
        const admins = await User.find({ role: "admin" });
        if (admins.length < 1) {
            res.status(403).json({ status: 403, message: "No admin data found", success: false, data: null });
        }
        else {
            const pagedata = tool.paginatedResult(admins, page, limit);
            res.status(200).json({ status: 200, message: "Total admins : " + admins.length, success: true, data: pagedata });
        }
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: null });
    }
});


// MANAGE CRICKET SECTION

// api to create a new match
app.post("/new_match", sessionCheck.isOwner, async (req, res) => {
    data = await Match.find().exec();
    try {
        let mname = req.body.team1 + "-VS-" + req.body.team2;
        console.log(req.body);

        const newmatch = await Match.create({
            id: data.length + 1,
            market_id: req.body.market_id,
            insert_type: req.body.insert_type,
            team1: req.body.team1,
            team2: req.body.team2,
            name: mname,
            match_type: req.body.match_type,
            date_time: req.body.date_time
        });
        console.log(newmatch);
        res.status(201).json({ status: 201, message: "Match created", data: newmatch });
    } catch (err) {
        console.log(err);
    }
});

//  returns details about a particular match when valid market_id is provided
app.post("/detail-match", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const { market_id } = req.body;
        const match = await Match.findOne({ market_id });
        //   let date = match.date_time.getFullYear()+"-"+match.date_time.getMonth()+"-"+match.date_time.getDate();
        //   let time = match.date_time.toLocaleTimeString();
        //   match.date = date;
        //   match.time = time;
        if (match.length < 1) {
            res.status(403).json({ status: 403, message: "No match data found", success: false, data: null });
        }
        else {
            res.status(200).json({ status: 200, message: "Match data ", success: true, data: match });
        }

    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: null })
    }
});


//  returns a list of manual matches
app.get("/manual-matches", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const { page, limit } = req.query;
        const matches = await Match.find({ insert_type: "manual" });
        console.log(matches.length);

        if (matches.length < 1) {
            res.status(403).json({ status: 403, message: "No match data found", success: false, data: null });
        } else {
            const pagedata = tool.paginatedResult(matches, page, limit)
            res.status(200).json({ status: 200, message: "Total matches inserted manually : " + matches.length, success: true, data: pagedata });
        }
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: err });

    }
});

//  returns a list of api matches
app.get("/api-matches", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const { page, limit } = req.query;
        const matches = await Match.find({ insert_type: "api" });
        if (matches.length < 1) {
            res.status(403).json({ status: 403, message: "No match data found", success: false, data: null });
        } else {
            const pagedata = tool.paginatedResult(matches, page, limit);
            res.status(200).json({ status: 200, message: "Total matches inserted by API : " + matches.length, success: true, data: pagedata });
        }
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: err });

    }
});


//  returns a list of abandoned matches 
app.get("/abandoned-matches", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        // const { page, limit } = req.query;
        const matches = await Match.find({ status: "abandoned" });
        console.log(matches.length);
        if (matches.length < 1) {
            res.status(403).json({ status: 403, message: "No match data found", success: false, data: null });
        }
        else {
            const pagedata = tool.paginatedResult(matches, page, limit)
            res.status(200).json({ status: 200, message: "Total matches abandoned : " + matches.length, success: true, data: pagedata });
        }
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: err });
    }
});


//  api to abandon a match
app.post("/abandon-match", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const market_id = req.body.market_id;
        console.log(market_id);
        await Match.updateOne({ market_id }, { $set: { status: "abandoned" } }).exec();
        const match = await Match.findOne({ market_id });
        console.log(match);
        res.status(201).json({ status: 201, message: "Match abandoned", success: true, data: match });
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: null });
    }
});


//  api to remove a match
app.post("/remove-inplay-match", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const game_id = req.body.gameId;
        console.log(game_id);
        await Match.deleteOne({ game_id }).exec();
        const match = await Match.findOne({ game_id });
        console.log(match);
        res.status(201).json({ status: 201, message: "Match removed", success: true, data: match });
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: null });
    }
});


//  api to change a team name
app.post("/change-team-name", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const { market_id, team1, team2 } = req.body;
        console.log(market_id, team1, team2);
        if (!(market_id && team1 && team2)) {
            res.status(400).json({ status: 400, message: "Insufficient input", success: false });
        }
        await Match.updateOne({ market_id }, { $set: { team1: team1, team2: team2 } }).exec();
        match = await Match.find({ market_id }).exec();

        console.log(match);
        res.status(201).json({ status: 201, message: "Team name updated", success: true, data: match });
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: null });
    }
});


// api to change setting of particular match
app.post("/match-setting", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const market_id = req.body.market_id;
        console.log(market_id);

        const { odds_type, insert_type, status, match_type, session_api_hit, fancy_running_type,
            score_hit_method, client_api_hit, date_time, name, tv_type, socket, bet_delay_time,
            score_id, funting_status, fav_team, maximum_match_amount, minimum_match_amount,
            maximum_session_amount, minimum_session_amount, team1, team2 } = req.body;

        await Match.updateOne({ market_id }, {
            $set: {
                odds_type: odds_type, insert_type: insert_type, status: status, match_type: match_type, session_api_hit: session_api_hit, fancy_running_type: fancy_running_type,
                score_hit_method: score_hit_method, client_api_hit: client_api_hit, date_time: date_time, name: name, tv_type: tv_type, socket: socket, bet_delay_time: bet_delay_time,
                score_id, funting_status, fav_team, maximum_match_amount, minimum_match_amount,
                maximum_session_amount: maximum_session_amount, minimum_session_amount: minimum_session_amount, team1: team1, team2: team2
            }
        }).exec();


        const match = await Match.findOne({ market_id }).exec();
        console.log(match);

        res.status(201).json({ status: 201, message: "Match data updated", success: true, data: match });

    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: null });
    }
});

//  return a list of all matches with score_id
app.get("/score-id", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const matches = await Match.find({ score_id: { $gt: 1 } });
        console.log(matches);
        if (matches.length < 1) {
            res.status(400).json({ status: 400, message: "No score_id found", success: false, data: null });
        }
        else {
            res.status(200).json({ status: 200, message: "Matches with score_id", success: true, data: matches });
        }
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: null });
    }
});


// api to post a notification to a match
app.post("/notification", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const { market_id, text } = req.body;
        const match = await Match.findOne({ market_id });
        if (!match) {
            console.log("No data");
            res.status(400).json({ status: 400, messgae: "No match corresponds to the given market_id", success: false, data: null });
        } else {
            await Match.updateOne({ market_id }, { $set: { notification: text } });
            const newmatch = await Match.findOne({ market_id });
            res.status(201).json({ status: 201, message: "Notification updated", success: true, data: newmatch.notification });
        }
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: null });
    }
});

// MATCH ODDS
app.post("/match-bhav", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const { market_id, match_range, odd_status, lagai_top, lagai_top_switch, khaai_top, khaai_top_switch, lagai_bottom, lagai_bottom_switch, khaai_bottom, khaai_bottom_switch } = req.body;

        const id = match_bhav.estimatedDocumentCount() + 1;
        const match = await Match.findOne({ market_id });
        console.log(match);
        const data = await match_bhav.create({
            id,
            market_id,
            match_range,
            odd_status,
            lagai_top,
            lagai_top_switch,
            khaai_top,
            khaai_top_switch,
            lagai_bottom,
            lagai_bottom_switch,
            khaai_bottom,
            khaai_bottom_switch
        });
        console.log(data);
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: null });
    }
});

// api to create a session
app.post("/create-session", upload.none(), async (req, res) => {
  let gameId = req.body.gameId;
  let url = `http://172.105.63.10:3000/getdata/${gameId}`;

  cron.schedule("*/1 * * * * *", async function () {
    await axios
      .get(url)
      .then(async (resp) => {
        let data = JSON.parse(JSON.stringify(resp.data));
        if (data.length < 1) {
          return res.status(201).json({
            status: 201,
            message: "No Session Found",
            success: false,
            data: null,
          });
        }
        data["f"].map(async (_session) => {
          const { sid, nat, b1, l1, bs1, ls1 } = _session;
          let existingSession = await Session.find({
            sessionId: sid,
            matchId: gameId,
          });
          if (existingSession.length > 0) {
            //update session data
            await Session.updateOne(
              { sessionId: sid, matchId: gameId },
              {
                $set: {
                  yesRun: b1,
                  yesRate: bs1,
                  noRun: l1,
                  noRate: ls1,
                },
              }
            );
          } else {
            await Session.create({
              sessionId: sid,
              matchId: gameId,
              sessionName: nat,
              yesRun: b1,
              yesRate: bs1,
              noRun: l1,
              noRate: ls1,
            });
          }
        });
        let finalData = await Session.find({ matchId: gameId });

        return res.status(201).json({
          status: 201,
          message: "New Session Created",
          success: true,
          data: finalData,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(200).json({
          status: 200,
          message: "No Session Found catch",
          success: false,
          data: null,
        });
      });
  });
});


//  returns a list of all sessions for a particular match
app.post(
  "/sessions-list",
  sessionCheck.isOwner,
  upload.none(),
  async (req, res) => {
    try {
      const { matchId } = req.body;
      const sessions = await Session.find({ matchId }).exec();
      if (sessions.length < 1) {
        res.status(400).json({
          status: 400,
          message: "No sessions created yet!",
          success: false,
          data: null,
        }); 
      } else {
        res.status(200).json({
          status: 200,
          message: "Sessions for match : " + matchId,
          success: true,
          data: sessions,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(200).json({
        status: 200,
        message: "Internal server error",
        success: false,
        data: null,
      });
    }
  }
);


//  api to change setting of a session
app.post("/session-setting", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const { id, market_id, state, no_run, yes_range, type } = req.body;
        let session = await Session.findOne({ id: id, market_id: market_id });
        if (!session) {
            res.status(400).json({ status: 400, message: "Session not found", success: false, data: null });
        } else {
            session = await Session.updateOne({ id: id, market_id: market_id }, { $set: { state: state, no_run: no_run, yes_range: yes_range, type: type } }).exec();
            console.log(session);
            res.status(201).json({ status: 201, message: "Session updated", success: true, data: session });
        }
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: null });
    }
});


// api to declare a session
app.post("/declare-session", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const { id, decision_run } = req.body;
        if (!(id && decision_run)) {
            res.status(400).json({ status: 400, message: "In-sufficient data", success: false, data: null });

        } else {
            const data = await Session.updateOne({ id }, { $set: { status: "declared", decision_run: decision_run } });
            console.log(data);
            res.status(201).json({ status: 201, message: "Session declared", success: true, data });
        }
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: null });
    }
});


//  api to abandon a session
app.post("/session-abandon", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        const { id } = req.body;
        const session = await Session.findOne({ id });
        if (!session) {
            res.status(400).json({ status: 400, message: "No session found for this ID", success: false, data: null });
        } else {
            const data = await Session.updateOne({ id }, { $set: { status: "abandoned" } });
            res.status(201).json({ status: 201, message: "Session abandoned", success: true, data: data });
        }
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: null });
    }
});

// app.post("/session-bhav",sessionCheck.isOwner,upload.none(),async(req,res)=>{
//   try{
//       const {status,no_run,yes_range,type} = req.body;
//     //   const id ;
//   } catch(err){
//       console.log(err);
//       res.status(200).json({status:200, message:"Internal server error", success:false, data:null});
//   }
// });

// app.get("/dashbord",sessionCheck.isSuperAdmin, (req, res) => {
//   res.render("admin/matches");
// });

// MANAGE PASSWORD SECTION

//  api to manage password for this account 
app.post("/manage-password", sessionCheck.isOwner, upload.none(), async (req, res) => {
    try {
        console.log(req.user);

        const { newpass, confirm } = req.body;
        if (newpass == confirm) {
            await Owner.updateOne({ _id: req.user.owner_id }, { $set: { password: newpass } }).exec();
            res.status(201).json({ status: 201, message: "Password update success", success: true, data: null });
        }
        else {
            res.status(409).json({ status: 409, message: "Passwords miss-match, enter again.", success: false, data: null });
        }

    } catch (err) {
        console.log(err);
        res.status(200).json({ status: 200, message: "Internal server error", success: false, data: err });

    }
});


app.get("/matchbhav", sessionCheck.isAuth, (req, res) => {
    res.render('admin/mbhav');
});

// app.post("/new_bhav",sessionCheck.isSuperAdmin,async (req, res) => {
//     const data = await Match.find().exec();
//     try{
//         console.log(req.body);
//         const bhav = await match_bhav.create({
//             id:data.length +1,
//             market_id:req.body.market_id,
//             team1:req.body.team1,
//             team2:req.body.team2,
//             lagai:req.body.lagai,
//             khaai:req.body.khaai,
//             insert_type:req.body.insert_type,
//             match_amount:req.body.match_amount
//         });
//         res.status(201).json(bhav);
//     } catch (err) {
//     console.log(err);
//   }
// });

//  api for logout
app.get("/logout", sessionCheck.isOwner, upload.none(), async (req, res) => {
    console.log(req.session);
    req.session.destroy();
    console.log("Owner logged out");
    res.status(200).json({ status: "200", message: "Owner logged-out", success: true });
});

module.exports = app;
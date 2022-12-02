var express = require("express");
require("dotenv").config();
const User = require("../model/user");
const matches = require("../model/mcreate");
const records = require("../model/mrecord");
const match_bhav = require("../model/mbhav");
const auth = require("../middleware/auth");
var sessionCheck = require("../middleware/tokencheck");
const app = express();
app.use(express.json());
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var multer = require("multer");
const path = require("path");
var uploads = multer({ storage: storage });
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/asset/"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});
var upload = multer({ storage: storage });
const fs = require("fs");

app.get("/", function (req, res, next) {
  res.render("admin/login");
});

app.post("/login", upload.none(), async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }
    // const user = await User.findOne({email:email, role:'Super Admin'});
    if (email != "admin@sixpro.com" && password != "sixpro@admin") {
      return res.status(400).send("Invalid Credentials");
    }
    const token = jwt.sign(
      { email: email, role: "admin" },
      process.env.TOKEN_KEY,
      {
        expiresIn: "20h",
      }
    );
    res.status(200).json({ token: token });
  } catch (err) {
    console.log(err);
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/admin-login/");
});

app.get("/dashbord", sessionCheck.isSuperAdmin, (req, res) => {
  res.render("admin/matches");
});
app.post("/new_match", sessionCheck.isSuperAdmin, async (req, res) => {
  data = await matches.find().exec();
  try {
    console.log(req.body);
    const newmatch = await matches.create({
      id: data.length + 1,
      market_id: req.body.market_id,
      insert_type: req.body.insert_type,
      team1: req.body.team1,
      team2: req.body.team2,
      match_type: req.body.match_type,
      date_time: req.body.date_time,
    });
    res.status(201).json(newmatch);
  } catch (err) {
    console.log(err);
  }
});
app.get("/matchbhav", sessionCheck.isAuth, (req, res) => {
  res.render("admin/mbhav");
});
app.post("/new_bhav", sessionCheck.isSuperAdmin, async (req, res) => {
  const data = await matches.find().exec();
  try {
    console.log(req.body);
    const bhav = await match_bhav.create({
      id: data.length + 1,
      market_id: req.body.market_id,
      team1: req.body.team1,
      team2: req.body.team2,
      lagai: req.body.lagai,
      khaai: req.body.khaai,
      insert_type: req.body.insert_type,
      match_amount: req.body.match_amount,
    });
    res.status(201).json(bhav);
  } catch (err) {
    console.log(err);
  }
});

app.post(
  "/subadmin-create",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      let count = await User.estimatedDocumentCount();
      count += 1;
      const { name, contact_no, password, reference } = req.body;
      const {
        limit,
        share,
        cassinoShare,
        cassinoCommission,
        cassinoStatus,
        commissionType,
        matchCommission,
        sessionCommission,
      } = req.body;

      const owner_uid = req.user.uid;
      const owner_role = req.user.role;

      const role = "subadmin",
        status = "active";
      if (!(password && name && contact_no && limit && share)) {
        return res.status(200).json({
          status: 200,
          message: "All input is required",
          succes: false,
          data: null,
        });
      }

      let cStatus;
      if (cassinoStatus == "OFF" || cassinoStatus == "off") {
        cStatus = 0;
      } else if (cassinoStatus == "ON" || cassinoStatus == "on") {
        cStatus = 1;
      }

      const user = await User.create({
        uid: "SUB" + count,
        name,
        contact_no,
        status,
        role,
        password: password,
        createdBy: owner_role,
        reference,
        limit,
        share,
        cassinoShare,
        cassinoCommission,
        cassinoStatus: cStatus,
        commissionType,
        matchCommission,
        sessionCommission,
      });
      console.log(user);
      const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
        expiresIn: "20h",
      });
      user.token = token;
      return res.status(201).json({
        status: 201,
        message: "Subadmin creation successful",
        success: true,
        data: user,
      });
    } catch (err) {
      console.log(err);
      return res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

// admin section api to create new masters
app.post(
  "/master-create",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      let count = await User.estimatedDocumentCount();
      count += 1;
      const { name, contact_no, password } = req.body;
      const { limit, share, commission } = req.body;

      console.log(req.body);

      const owner_uid = req.user.uid;
      const owner_role = req.user.role;

      const role = "master",
        status = "active";
      if (!(password && name && contact_no && limit && share)) {
        res.status(200).json({
          status: 200,
          message: "All input is required",
          succes: false,
          data: null,
        });
      }
      // const oldUser = await User.findOne({ email });
      // if (oldUser) {
      //     return res.status(409).json({ status: 409, message: "User Already Exist. Please Login", success: false, data: oldUser });
      // }
      // const owner_uid = req.user.uid;
      const subadminUser = await User.findOne({ uid: owner_uid });

      if (!(subadminUser.limit > limit && subadminUser.share > share)) {
        return res.status(200).json({
          status: 200,
          message: "Incorrect Input of limit or share",
          success: false,
        });
      }

      const user = await User.create({
        uid: "MA" + count,
        name,
        contact_no,
        status,
        role,
        password: password,
        createdBy: owner_role,
        limit,
        share,
        commission,
      });
      console.log("\n" + user);

      const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
        expiresIn: "20h",
      });

      let updatedLimit = 0;
      let updatedShare = 0;
      if (subadminUser.limit > user.limit && subadminUser.share > user.share) {
        updatedLimit = subadminUser.limit - user.limit;
      }

      await User.updateOne(
        { uid: owner_uid },
        { $set: { limit: updatedLimit } }
      );
      user.token = token;
      return res.status(201).json({
        status: 201,
        message: "Master creation successful",
        success: true,
        data: user,
      });
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

// api to create a new superagent account
app.post(
  "/super-agent-create",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      let count = await User.estimatedDocumentCount();
      count += 1;

      const { name, contact_no, password, reference } = req.body;
      const { limit, share, commission } = req.body;

      const owner_uid = req.user.uid;
      const owner_role = req.user.role;

      const role = "superagent",
        status = "active";
      if (!(password && name && contact_no && limit && share)) {
        res.status(200).json({
          status: 200,
          message: "All input is required",
          success: false,
          data: null,
        });
      }

      // const owner_uid = req.user.uid;
      const subadminUser = await User.findOne({ uid: owner_uid });

      if (!(subadminUser.limit > limit && subadminUser.share > share)) {
        return res.status(200).json({
          status: 200,
          message: "Incorrect Input of limit or share",
          success: false,
        });
      }

      const user = await User.create({
        uid: "SA" + count,
        name,
        contact_no,
        status,
        role,
        password: password,
        createdBy: owner_role,
        reference,
        limit,
        share,
        commission,
      });
      console.log(user);

      const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
        expiresIn: "20h",
      });

      let updatedLimit = 0;
      let updatedShare = 0;
      if (subadminUser.limit > user.limit && subadminUser.share > user.share) {
        updatedLimit = subadminUser.limit - user.limit;
      }

      await User.updateOne(
        { uid: owner_uid },
        { $set: { limit: updatedLimit } }
      );
      user.token = token;
      return res.status(201).json({
        status: 201,
        message: "Super agent creation successful",
        success: true,
        data: user,
      });
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

// api to create a new agent
app.post(
  "/agent-create",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      let count = await User.estimatedDocumentCount();
      count += 1;

      const { name, contact_no, password, reference } = req.body;
      const { limit, share, commission } = req.body;
      const role = "agent",
        status = "active";
      if (!(name && password && contact_no && limit && share)) {
        res.status(400).json({
          status: 400,
          message: "All input is required",
          success: false,
          data: null,
        });
      }

      const owner_uid = req.user.uid;
      const owner_role = req.user.role;

      const subadminUser = await User.findOne({ uid: owner_uid });

      if (!(subadminUser.limit > limit && subadminUser.share > share)) {
        return res.status(200).json({
          status: 200,
          message: "Incorrect Input of limit or share",
          success: false,
        });
      }

      const user = await User.create({
        uid: "A" + count,
        name,
        contact_no,
        status,
        role,
        password: password,
        createdBy: owner_role,
        limit,
        share,
        commission,
      });

      const new_agent = User.find({ uid: user.uid });

      const token = jwt.sign(
        { user_id: user._id, role: role },
        process.env.TOKEN_KEY,
        {
          expiresIn: "20h",
        }
      );

      let updatedLimit = 0;
      let updatedShare = 0;
      if (subadminUser.limit > user.limit && subadminUser.share > user.share) {
        updatedLimit = subadminUser.limit - user.limit;
      }

      await User.updateOne(
        { uid: owner_uid },
        { $set: { limit: updatedLimit } }
      );

      user.token = token;

      return res.status(201).json({
        status: 201,
        message: "Agent creation successful",
        success: true,
        data: user,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: 500,
        message: "Internal server error",
        success: false,
        data: null,
      });
    }
  }
);

// api to create a new client
app.post(
  "/client-create",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      let count = await User.estimatedDocumentCount();
      count += 1;

      const { name, contact_no, password } = req.body;
      const { limit, share, commission } = req.body;
      const role = "client",
        status = "active";
      if (!(name && password && contact_no && limit)) {
        res.status(400).json({
          status: 400,
          message: "All input is required",
          success: false,
          data: null,
        });
      }
      const owner_uid = req.user.uid;
      const owner_role = req.user.role;

      const subadminUser = await User.findOne({ uid: owner_uid });

      if (!(subadminUser.limit > limit && subadminUser.share > share)) {
        return res.status(200).json({
          status: 200,
          message: "Incorrect Input of limit or share",
          success: false,
        });
      }

      const user = await User.create({
        uid: "C" + count,
        name,
        contact_no,
        status,
        role,
        password: password,
        createdBy: owner_role,
        limit,
        share,
        commission,
      });
      // const new_client = User.find({ uid: user.uid });
      if (user) {
        const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
          expiresIn: "20h",
        });

        let updatedLimit = 0;
        let updatedShare = 0;
        if (
          subadminUser.limit > user.limit &&
          subadminUser.share > user.share
        ) {
          updatedLimit = subadminUser.limit - user.limit;
        }

        await User.updateOne(
          { uid: owner_uid },
          { $set: { limit: updatedLimit } }
        );

        user.token = token;
        return res.status(201).json({
          status: 201,
          message: "Client creation successful",
          success: true,
          data: user,
        });
      } else {
        return res.status(401).json({
          status: 401,
          message: "Invalid credentials",
          success: true,
          data: user,
        });
      }
    } catch (err) {
      console.log(err);
      //    return res.status(401).json({ status: 401, message: "Invalid credentials", success: true, data: user });
    }
  }
);

// api to edit details of particular subadmin
app.post(
  "/edit-subadmin",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const uid = req.body.uid;
      const owner_uid = req.user.uid;
      const { name, contact_no, password, commission } = req.body;
      const { limit, share } = req.body;
      const oldUser = await User.findOne({ uid: uid });
      let limits = limit - oldUser.limit;
      let shares = share - oldUser.share;
      const masterUser = await User.findOne({ uid: owner_uid });

      console.log("MasterUser ==>", masterUser);

      if (!(masterUser.limit > limits && masterUser.share > shares)) {
        return res.status(200).json({
          status: 200,
          message: "Incorrect Input of limit or share",
          success: false,
        });
      }
      const updatedUser = await User.updateOne(
        { uid },
        {
          $set: {
            name: name,
            password: password,
            contact_no: contact_no,
            limit: limit,
            share: share,
            commission: commission,
          },
        }
      ).exec();

      if (updatedUser) {
        //oldUser obj
        const oldUserObj = {
          uid: oldUser.uid,
          contact_no: oldUser.contact_no,
          limit: oldUser.limit.toString(),
          name: oldUser.name,
          password: oldUser.password,
          share: oldUser.share.toString(),
          commission: commission,
        };

        //return array of keys for which field is changed
        let changedValueKeys = Object.keys(oldUserObj).filter(
          (key) => oldUserObj[key] !== req.body[key]
        );

        //iterate over each changedValueKey
        let results = changedValueKeys.map((_key) => {
          return {
            uid: uid, //current master uid,
            loginName: oldUser.name,
            fieldName: _key,
            oldValue: oldUser[_key],
            newValue: req.body[_key],
            updatedBy: owner_uid,
            // ip: req.ip + req.token.split(".")[0],
            lastActivity: new Date(),
            date_time: new Date(),
          };
        });
        // results[0].updatedBy = owner_uid

        console.log("------------>", results);
        //save login report data...
        // await loginReport.insertMany(results);

        results = {};
      }

      const updated_user = await User.find({ uid });

      let updatedLimit = 0;
      let updatedShare = 0;
      if (masterUser.limit > limits && masterUser.share > shares) {
        updatedLimit = masterUser.limit - limits;
      }
      let updateMaster = await User.updateOne(
        { uid: owner_uid },
        { $set: { limit: updatedLimit } }
      );

      res.status(201).json({
        status: 201,
        message: "Edit success",
        success: true,
        data: updated_user,
      });
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ status: 200, message: err, success: false, data: null });
    }
  }
);

// api to edit details of particular master
app.post(
  "/edit-master",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const uid = req.body.uid;
      const owner_uid = req.user.uid;
      const { name, contact_no, password, commission } = req.body;
      const { limit, share } = req.body;
      const oldUser = await User.findOne({ uid: uid });
      let limits = limit - oldUser.limit;
      let shares = share - oldUser.share;
      const masterUser = await User.findOne({ uid: owner_uid });

      if (!(masterUser.limit > limits && masterUser.share > shares)) {
        return res.status(200).json({
          status: 200,
          message: "Incorrect Input of limit or share",
          success: false,
        });
      }
      const updatedUser = await User.updateOne(
        { uid },
        {
          $set: {
            name: name,
            password: password,
            contact_no: contact_no,
            limit: limit,
            share: share,
            commission: commission,
          },
        }
      ).exec();

      if (updatedUser) {
        //oldUser obj
        const oldUserObj = {
          uid: oldUser.uid,
          contact_no: oldUser.contact_no,
          limit: oldUser.limit.toString(),
          name: oldUser.name,
          password: oldUser.password,
          share: oldUser.share.toString(),
          commission: commission,
        };

        //return array of keys for which field is changed
        let changedValueKeys = Object.keys(oldUserObj).filter(
          (key) => oldUserObj[key] !== req.body[key]
        );

        //iterate over each changedValueKey
        let results = changedValueKeys.map((_key) => {
          return {
            uid: uid, //current master uid,
            loginName: oldUser.name,
            fieldName: _key,
            oldValue: oldUser[_key],
            newValue: req.body[_key],
            updatedBy: owner_uid,
            // ip: req.ip + req.token.split(".")[0],
            lastActivity: new Date(),
            date_time: new Date(),
          };
        });
        // results[0].updatedBy = owner_uid

        console.log("------------>", results);
        //save login report data...
        // await loginReport.insertMany(results);

        results = {};
      }

      const updated_user = await User.find({ uid });
      let updatedLimit = 0;
      let updatedShare = 0;
      if (masterUser.limit > limits && masterUser.share > shares) {
        updatedLimit = masterUser.limit - limits;
      }
      let updateMaster = await User.updateOne(
        { uid: owner_uid },
        { $set: { limit: updatedLimit } }
      );

      res.status(201).json({
        status: 201,
        message: "Edit success",
        success: true,
        data: updated_user,
      });
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ status: 200, message: err, success: false, data: null });
    }
  }
);

// api to edit informations of an existing superagent account
app.post(
  "/edit-superagent",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const uid = req.body.uid;
      const owner_uid = req.user.uid;
      const { name, contact_no, password, commission } = req.body;
      const { limit, share } = req.body;

      const oldUser = await User.findOne({ uid: uid });

      let limits = limit - oldUser.limit;

      let shares = share - oldUser.share;
      const masterUser = await User.findOne({ uid: owner_uid });
      if (!(masterUser.limit > limits && masterUser.share > shares)) {
        return res.status(200).json({
          status: 200,
          message: "Incorrect Input of limit or share",
          success: false,
        });
      }
      const updatedUser = await User.updateOne(
        { uid },
        {
          $set: {
            name: name,
            password: password,
            contact_no: contact_no,
            limit: limit,
            share: share,
            commission: commission,
          },
        }
      ).exec();

      //oldUser obj
      let oldUserObj = {
        uid: oldUser.uid,
        contact_no: oldUser.contact_no,
        limit: oldUser.limit.toString(),
        name: oldUser.name,
        password: oldUser.password,
        share: oldUser.share.toString(),
        commission: commission,
      };
      if (updatedUser) {
        //return array of keys for which field is changed
        const changedValueKeys = Object.keys(oldUserObj).filter(
          (key) => oldUserObj[key] !== req.body[key]
        );

        //iterate over each changedValueKey
        let results = changedValueKeys.map((_key) => {
          return {
            uid: uid, //current master uid,
            loginName: oldUser.name,
            fieldName: _key,
            oldValue: oldUser[_key],
            newValue: req.body[_key],
            updatedBy: owner_uid,
            // ip: req.ip + req.token.split(".")[0],
            lastActivity: new Date(),
            date_time: new Date(),
          };
        });

        //save login report data...
        // await loginReport.insertMany(results);
      }
      const updated_user = await User.findOne({ uid });
      let updatedLimit = 0;
      let updatedShare = 0;
      if (masterUser.limit > limits && masterUser.share > shares) {
        updatedLimit = masterUser.limit - limits;
      }
      let updateMaster = await User.updateOne(
        { uid: owner_uid },
        { $set: { limit: updatedLimit } }
      );

      res.status(201).json({
        status: 201,
        message: "Edit success",
        success: true,
        data: updated_user,
      });
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

//  api to edit information of an agent account
app.post(
  "/edit-agent",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const uid = req.body.uid;

      const owner_uid = req.user.uid;
      const { name, contact_no, password, commission } = req.body;
      const { limit, share } = req.body;
      const oldUser = await User.findOne({ uid: uid });
      let limits = limit - oldUser.limit;
      let shares = share - oldUser.share;
      const masterUser = await User.findOne({ uid: owner_uid });
      if (!(masterUser.limit > limits && masterUser.share > shares)) {
        return res.status(200).json({
          status: 200,
          message: "Incorrect Input of limit or share",
          success: false,
        });
      }
      const updatedUser = await User.updateOne(
        { uid },
        {
          $set: {
            name: name,
            password: password,
            contact_no: contact_no,
            limit: limit,
            share: share,
            commission: commission,
          },
        }
      ).exec();

      //oldUser obj
      let oldUserObj = {
        uid: oldUser.uid,
        contact_no: oldUser.contact_no,
        limit: oldUser.limit.toString(),
        name: oldUser.name,
        password: oldUser.password,
        share: oldUser.share.toString(),
        commission: commission,
      };

      if (updatedUser) {
        //return array of keys for which field is changed
        const changedValueKeys = Object.keys(oldUserObj).filter(
          (key) => oldUserObj[key] !== req.body[key]
        );

        //iterate over each changedValueKey
        let results = changedValueKeys.map((_key) => {
          return {
            uid: uid, //current master uid,
            loginName: oldUser.name,
            fieldName: _key,
            oldValue: oldUser[_key],
            newValue: req.body[_key],
            updatedBy: owner_uid,
            // ip: req.ip + req.token.split(".")[0],
            lastActivity: new Date(),
            date_time: new Date(),
          };
        });

        //save login report data...
        // await loginReport.insertMany(results);
      }
      const updated_user = await User.find({ uid });
      let updatedLimit = 0;
      let updatedShare = 0;
      if (masterUser.limit > limits && masterUser.share > shares) {
        updatedLimit = masterUser.limit - limits;
      }
      let updateMaster = await User.updateOne(
        { uid: owner_uid },
        { $set: { limit: updatedLimit } }
      );
      res.status(201).json({
        status: 201,
        message: "Edit success",
        success: true,
        data: updated_user,
      });
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

//  api to edit information about a client account
app.post(
  "/edit-client",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const uid = req.body.uid;
      const owner_uid = req.user.uid;
      const { name, contact_no, password, commission } = req.body;
      const { limit, share } = req.body;
      const oldUser = await User.findOne({ uid: uid });

      let limits = limit - oldUser.limit;
      let shares = share - oldUser.share;
      const masterUser = await User.findOne({ uid: owner_uid });
      if (!(masterUser.limit > limits && masterUser.share > shares)) {
        return res.status(200).json({
          status: 200,
          message: "Incorrect Input of limit or share",
          success: false,
        });
      }
      const updatedUser = await User.updateOne(
        { uid },
        {
          $set: {
            name: name,
            password: password,
            contact_no: contact_no,
            limit: limit,
            share: share,
            commission: commission,
          },
        }
      ).exec();
      //oldUser obj
      let oldUserObj = {
        uid: oldUser.uid,
        contact_no: oldUser.contact_no,
        limit: oldUser.limit.toString(),
        name: oldUser.name,
        password: oldUser.password,
        share: oldUser.share.toString(),
        commission: commission,
      };

      if (updatedUser) {
        //return array of keys for which field is changed
        const changedValueKeys = Object.keys(oldUserObj).filter(
          (key) => oldUserObj[key] !== req.body[key]
        );

        //iterate over each changedValueKey
        let results = changedValueKeys.map((_key) => {
          return {
            uid: uid, //current master uid,
            loginName: oldUser.name,
            fieldName: _key,
            oldValue: oldUser[_key],
            newValue: req.body[_key],
            updatedBy: owner_uid,
            // ip: req.ip + req.token.split(".")[0],
            lastActivity: new Date(),
            date_time: new Date(),
          };
        });

        //save login report data...
        // await loginReport.insertMany(results);
      }
      const updated_user = await User.find({ uid });

      let updatedLimit = 0;
      let updatedShare = 0;
      if (masterUser.limit > limits && masterUser.share > shares) {
        updatedLimit = masterUser.limit - limits;
      }
      let updateMaster = await User.updateOne(
        { uid: owner_uid },
        { $set: { limit: updatedLimit } }
      );

      res.status(201).json({
        status: 201,
        message: "Edit success",
        success: true,
        data: updated_user,
      });
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

// api to change the limit of a subadmin account
app.post(
  "/change-subadmin-limit",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    console.log("--------------->", req.body);
    try {
      const { uid, limit, value } = req.body;
      const owner_uid = req.user.uid;
      const ownerData = await User.findOne({ uid: owner_uid });
      const oldUser = await User.findOne({ uid: uid });
      let limits = 0;
      let masterLimit = 0;
      if (value == 0) {
        limits = oldUser.limit - limit;
        masterLimit = ownerData.limit + Number(limit);
      } else {
        limits = oldUser.limit + Number(limit);
        masterLimit = ownerData.limit - limit;
      }
      if (limits < 0) {
        res.status(200).json({
          status: 200,
          message: "limit value incorrect",
          success: false,
          data: null,
        });
      } else {
        await User.updateOne({ uid: uid }, { $set: { limit: limits } });
        await User.updateOne(
          { uid: owner_uid },
          { $set: { limit: masterLimit } }
        );
        const user = await User.findOne({ uid: uid });
        res.status(201).json({
          status: 201,
          message: "limit changed",
          success: true,
          data: user,
        });
      }
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

// api to change the limit of a master account
app.post(
  "/change-master-limit",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid, limit, value } = req.body;
      const owner_uid = req.user.uid;
      const ownerData = await User.findOne({ uid: owner_uid });
      const oldUser = await User.findOne({ uid: uid });
      let limits = 0;
      let masterLimit = 0;
      if (value == 0) {
        limits = oldUser.limit - limit;
        masterLimit = ownerData.limit + Number(limit);
      } else {
        limits = oldUser.limit + Number(limit);
        masterLimit = ownerData.limit - limit;
      }
      if (limits < 0 && limits > ownerData.limit) {
        res.status(200).json({
          status: 200,
          message: "limit value incorrect",
          success: false,
          data: null,
        });
      } else {
        await User.updateOne({ uid: uid }, { $set: { limit: limits } });
        await User.updateOne(
          { uid: owner_uid },
          { $set: { limit: masterLimit } }
        );
        const user = await User.findOne({ uid: uid });
        res.status(201).json({
          status: 201,
          message: "limit changed",
          success: true,
          data: user,
        });
      }
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

// changes the limit of a superagent account
app.post(
  "/change-superagent-limit",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid, limit, value } = req.body;
      const owner_uid = req.user.uid;
      const ownerData = await User.findOne({ uid: owner_uid });
      const oldUser = await User.findOne({ uid: uid });
      let limits = 0;
      let masterLimit = 0;
      if (value == 0) {
        limits = oldUser.limit - limit;
        masterLimit = ownerData.limit + Number(limit);
      } else {
        limits = oldUser.limit + Number(limit);
        masterLimit = ownerData.limit - limit;
      }
      if (limits < 0 && limits > ownerData.limit) {
        res.status(200).json({
          status: 200,
          message: "limit value incorrect",
          success: false,
          data: null,
        });
      } else {
        await User.updateOne({ uid: uid }, { $set: { limit: limits } });
        await User.updateOne(
          { uid: owner_uid },
          { $set: { limit: masterLimit } }
        );
        const user = await User.findOne({ uid: uid });
        res.status(201).json({
          status: 201,
          message: "limit changed",
          success: true,
          data: user,
        });
      }
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

//  api to change limit of an agent
app.post(
  "/change-agent-limit",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid, limit, value } = req.body;
      const owner_uid = req.user.uid;
      const ownerData = await User.findOne({ uid: owner_uid });
      const oldUser = await User.findOne({ uid: uid });
      let limits = 0;
      let masterLimit = 0;
      if (value == 0) {
        limits = oldUser.limit - limit;
        masterLimit = ownerData.limit + Number(limit);
      } else {
        limits = oldUser.limit + Number(limit);
        masterLimit = ownerData.limit - limit;
      }
      if (limits < 0 && limits > ownerData.limit) {
        res.status(200).json({
          status: 200,
          message: "limit value incorrect",
          success: false,
          data: null,
        });
      } else {
        await User.updateOne(
          { uid: uid, role: "agent" },
          { $set: { limit: limits } }
        );
        await User.updateOne(
          { uid: owner_uid },
          { $set: { limit: masterLimit } }
        );
        const user = await User.find({ uid });
        res.status(201).json({
          status: 201,
          message: "limit changed",
          success: true,
          data: user,
        });
      }
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

//  api to change limit of a client account
app.post(
  "/change-client-limit",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid, limit, value } = req.body;

      const owner_uid = req.user.uid;
      const ownerData = await User.findOne({ uid: owner_uid });
      const oldUser = await User.findOne({ uid: uid });
      let limits = 0;
      let masterLimit = 0;
      if (value == 0) {
        limits = oldUser.limit - limit;
        masterLimit = ownerData.limit + Number(limit);
      } else {
        limits = oldUser.limit + Number(limit);
        masterLimit = ownerData.limit - limit;
      }
      if (limits < 0 && limits > ownerData.limit) {
        res.status(200).json({
          status: 200,
          message: "limit value incorrect",
          success: false,
          data: null,
        });
      } else {
        await User.updateOne(
          { uid: uid, role: "client" },
          { $set: { limit: limits } }
        );
        await User.updateOne(
          { uid: owner_uid },
          { $set: { limit: masterLimit } }
        );
        const user = await User.find({ uid });
        res.status(201).json({
          status: 201,
          message: "limit changed",
          success: true,
          data: user,
        });
      }
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

// returns list to all subadmins created by a particular admin (active and inactive included)
app.get(
  "/my-subadmins",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.uid;
      const role = "subadmin";
      let { page, limit } = req.query;
      const subadmin = await User.find({ role: role });
      if (subadmin.length < 1) {
        res.status(200).send({
          status: 200,
          message: "No subadmins data found.",
          data: null,
          success: false,
        });
      } else {
        // const pagedata = tool.paginatedResult(masters, page, limit);
        res.status(200).json({
          status: 200,
          message: "Subadmins list",
          success: true,
          data: subadmin,
        });
      }
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

// returns list to all masters created by a particular admin (active and inactive included)
app.get("/my-masters", sessionCheck.isAuth, upload.none(), async (req, res) => {
  try {
    const owner_uid = req.user.uid;
    const role = "master";
    let { page, limit } = req.query;
    const masters = await User.find({ role: role });
    if (masters.length < 1) {
      res.status(200).send({
        status: 200,
        message: "No master data found.",
        data: null,
        success: false,
      });
    } else {
      // const pagedata = tool.paginatedResult(masters, page, limit);
      res.status(200).json({
        status: 200,
        message: "Masters list",
        success: true,
        data: masters,
      });
    }
  } catch (err) {
    console.log(err);
    res
      .status(200)
      .json({ staus: 200, message: err, success: false, data: null });
  }
});

// returns list to all superagent created by a particular admin (active and inactive included)
app.get(
  "/my-superagent",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.uid;
      const role = "superagent";
      let { page, limit } = req.query;
      const superAgent = await User.find({
        role: role,
      });
      if (superAgent.length < 1) {
        res.status(200).send({
          status: 200,
          message: "No superagent data found.",
          data: null,
          success: false,
        });
      } else {
        // const pagedata = tool.paginatedResult(masters, page, limit);
        res.status(200).json({
          status: 200,
          message: "Superagent list",
          success: true,
          data: superAgent,
        });
      }
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

// returns list to all agent created by a particular admin (active and inactive included)
app.get("/my-agents", sessionCheck.isAuth, upload.none(), async (req, res) => {
  try {
    const owner_uid = req.user.uid;
    const role = "agent";
    let { page, limit } = req.query;
    const agent = await User.find({ role: role });
    if (agent.length < 1) {
      res.status(200).send({
        status: 200,
        message: "No agent data found.",
        data: null,
        success: false,
      });
    } else {
      // const pagedata = tool.paginatedResult(agent, page, limit);
      res.status(200).json({
        status: 200,
        message: "Agents list",
        success: true,
        data: agent,
      });
    }
  } catch (err) {
    console.log(err);
    res
      .status(200)
      .json({ staus: 200, message: err, success: false, data: null });
  }
});

// returns list to all client created by a particular admin (active and inactive included)
app.get("/my-clients", sessionCheck.isAuth, upload.none(), async (req, res) => {
  try {
    const owner_uid = req.user.uid;
    const role = "client";
    let { page, limit } = req.query;
    const client = await User.find({ role: role });
    if (client.length < 1) {
      res.status(200).send({
        status: 200,
        message: "No client data found.",
        data: null,
        success: false,
      });
    } else {
      // const pagedata = tool.paginatedResult(agent, page, limit);
      res.status(200).json({
        status: 200,
        message: "Clients list",
        success: true,
        data: client,
      });
    }
  } catch (err) {
    console.log(err);
    res
      .status(200)
      .json({ staus: 200, message: err, success: false, data: null });
  }
});

// activate subadmin created by a particular admin
app.post(
  "/activate-subadmin",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid } = req.body;
      await User.updateOne({ uid: uid }, { $set: { status: "active" } });
      const subadmin = await User.find({ uid: req.body.uid });
      return res.status(201).json(subadmin);
    } catch (err) {
      console.log(err);
      return res.status(200).json({
        staus: 200,
        message: "Internal server error",
        success: false,
        data: err,
      });
    }
  }
);

// deactivate subadmin created by a particular admin
app.post(
  "/deactivate-subadmin",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid } = req.body;
      await User.updateOne({ uid: uid }, { $set: { status: "inactive" } });
      const subadmin = await User.find({ uid: req.body.uid });
      return res.status(201).json(subadmin);
    } catch (err) {
      console.log(err);
      return res.status(200).json({
        staus: 200,
        message: "Internal server error",
        success: false,
        data: err,
      });
    }
  }
);

// returns list of all active master created by a particular admin
app.get(
  "/all-active-subadmins",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.role;
      console.log(owner_uid);
      const role = "subadmin";
      const subadmins = await User.find({
        role: role,
        status: "active",
      });
      if (subadmins.length < 1) {
        res.status(200).send({
          status: 200,
          message: "No active subadmin found!",
          success: false,
          data: null,
        });
      }
      res.status(200).json({
        status: 200,
        message: "Active Subadmins",
        success: true,
        data: subadmins,
      });
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ status: 200, message: err, success: false, data: null });
    }
  }
);

// returns list of all active master created by a particular admin
app.get(
  "/all-inactive-subadmins",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.role;
      console.log(owner_uid);
      const role = "subadmin";
      const subadmins = await User.find({
        role: role,
        status: "inactive",
      });
      if (subadmins.length < 1) {
        res.status(200).send({
          status: 200,
          message: "No inactive subadmin found!",
          success: false,
          data: null,
        });
      }
      res.status(200).json({
        status: 200,
        message: "Inactive Subadmins",
        success: true,
        data: subadmins,
      });
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ status: 200, message: err, success: false, data: null });
    }
  }
);

// activate master created by a particular admin
app.post(
  "/activate-master",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid } = req.body;
      await User.updateOne({ uid: uid }, { $set: { status: "active" } });
      const master = await User.find({ uid: req.body.uid });
      return res.status(201).json(master);
    } catch (err) {
      console.log(err);
      return res.status(200).json({
        staus: 200,
        message: "Internal server error",
        success: false,
        data: err,
      });
    }
  }
);

// api to deactivate a master account
app.post(
  "/deactivate-master",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      console.log("body", req.body);
      const { uid } = req.body;
      await User.updateOne(
        { uid: uid },
        { $set: { status: "inactive" } }
      ).exec();
      const master = await User.find({ uid: req.body.uid });
      res.status(201).json(master);
    } catch (err) {
      console.log(err);
      res.status(200).json({
        staus: 200,
        message: "Internal server error",
        success: false,
        data: err,
      });
    }
  }
);

// returns list of all active master created by a particular admin
app.get(
  "/all-active-masters",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.role;
      console.log(owner_uid);
      const role = "master";
      const masters = await User.find({
        role: role,
        status: "active",
      });
      if (masters.length < 1) {
        res.status(200).send({
          status: 200,
          message: "No active master found!",
          success: false,
          data: null,
        });
      }
      res.status(200).json({
        status: 200,
        message: "Active Masters",
        success: true,
        data: masters,
      });
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ status: 200, message: err, success: false, data: null });
    }
  }
);

// returns list of all inactive master created by a particular admin
app.get(
  "/all-inactive-masters",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.role;
      console.log(owner_uid);
      const role = "master";
      const masters = await User.find({
        role: "master",
        status: "inactive",
      });
      if (masters.length < 1) {
        res.status(200).send({
          status: 200,
          message: "No inactive master found!",
          success: false,
          data: null,
        });
      }
      res.status(200).json({
        status: 200,
        message: "Inactive Masters",
        success: true,
        data: masters,
      });
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ status: 200, message: err, success: false, data: null });
    }
  }
);

//  acitvate superagent account
app.post(
  "/activate-superagent",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const uid = req.body.uid;
      await User.updateOne({ uid: uid }, { $set: { status: "active" } }).exec();
      const superagent = await User.find({ uid });
      res.status(201).json({
        stauts: 201,
        message: "Activation success",
        success: true,
        data: superagent,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        staus: 500,
        message: "Internal server error",
        success: false,
        data: err,
      });
    }
  }
);

//  deactivates a superagent account
app.post(
  "/deactivate-superagent",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const uid = req.body.uid;
      await User.updateOne(
        { uid: uid },
        { $set: { status: "inactive" } }
      ).exec();
      const superagent = await User.find({ uid });
      res.status(201).json({
        status: 201,
        message: "Superagent deactivated",
        success: true,
        data: superagent,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        staus: 500,
        message: "Internal server error",
        success: false,
        data: err,
      });
    }
  }
);

// return list of all active superagent created by a admin
app.get(
  "/all-active-superagents",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.role;
      const { page, limit } = req.query;
      const active_superagents = await User.find({
        role: "superagent",
        status: "active",
      });
      if (active_superagents.length < 1) {
        res.status(200).json({
          status: 200,
          message: "No superagent data found.",
          success: false,
          data: null,
        });
      } else {
        // const pagedata = tool.paginatedResult(active_superagents, page, limit);
        res.status(200).json({
          status: 200,
          message: "All active Super agents",
          success: true,
          data: active_superagents,
        });
      }
    } catch (err) {
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

// return list of all inactive superagent created by a admin
app.get(
  "/all-inactive-superagents",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.role;
      const { page, limit } = req.query;
      const inactive_superagents = await User.find({
        role: "superagent",
        status: "inactive",
      });
      if (inactive_superagents.length < 1) {
        res.status(200).json({
          status: 200,
          message: "No superagent data found.",
          success: false,
          data: null,
        });
      } else {
        // const pagedata = tool.paginatedResult(active_superagents, page, limit);
        res.status(200).json({
          status: 200,
          message: "All inactive Super agents",
          success: true,
          data: inactive_superagents,
        });
      }
    } catch (err) {
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

//  api to active agent
app.post(
  "/activate-agent",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const uid = req.body.uid;
      await User.updateOne(
        { uid: uid, role: "agent" },
        { $set: { status: "active" } }
      ).exec();
      const agent = await User.find({ uid });
      res.status(201).json({
        stauts: 201,
        message: "Activation success",
        success: true,
        data: agent,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        staus: 500,
        message: "Internal server error",
        success: false,
        data: err,
      });
    }
  }
);

// api to deactivate an agent
app.post(
  "/deactivate-agent",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const uid = req.body.uid;
      await User.updateOne(
        { uid: uid, role: "agent" },
        { $set: { status: "inactive" } }
      ).exec();
      const agent = await User.find({ uid });
      res.status(201).json({
        status: 201,
        message: "Agent deactivated",
        success: true,
        data: agent,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        staus: 500,
        message: "Internal server error",
        success: false,
        data: err,
      });
    }
  }
);

// returns a list of all active agents created by this admin
app.get(
  "/all-active-agents",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.role;
      const { page, limit } = req.query;
      const active_agents = await User.find({
        role: "agent",
        status: "active",
      });
      if (active_agents.length < 1) {
        res.status(200).json({
          status: 200,
          message: "No agent data found.",
          success: false,
          data: null,
        });
      } else {
        // const pagedata = tool.paginatedResult(active_agents, page, limit);
        res.status(200).json({
          status: 200,
          message: "All active agents",
          success: true,
          data: active_agents,
        });
      }
    } catch (err) {
      // res.status(500).json({ status: 500, message: "Internal server error", data: err });
    }
  }
);

// returns a list of all inactive agents created by this admin
app.get(
  "/all-inactive-agents",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.role;
      const { page, limit } = req.query;
      const inactive_agents = await User.find({
        role: "agent",
        status: "inactive",
      });
      if (inactive_agents.length < 1) {
        res.status(200).json({
          status: 200,
          message: "No agent data found.",
          success: false,
          data: null,
        });
      } else {
        // const pagedata = tool.paginatedResult(active_agents, page, limit);
        res.status(200).json({
          status: 200,
          message: "All inactive agents",
          success: true,
          data: inactive_agents,
        });
      }
    } catch (err) {
      // res.status(500).json({ status: 500, message: "Internal server error", data: err });
    }
  }
);

//  api to active client account
app.post(
  "/activate-client",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const uid = req.body.uid;
      await User.updateOne(
        { uid: uid, role: "client" },
        { $set: { status: "active" } }
      ).exec();
      const client = await User.find({ uid });
      res.status(201).json({
        stauts: 201,
        message: "Activation success",
        success: true,
        data: client,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        staus: 500,
        message: "Internal server error",
        success: false,
        data: err,
      });
    }
  }
);

// api to deactivate a client account
app.post(
  "/deactivate-client",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const uid = req.body.uid;
      // console.log("uid",uid)
      await User.updateOne(
        { uid: uid, role: "client" },
        { $set: { status: "inactive" } }
      ).exec();
      const client = await User.find({ uid });
      res.status(201).json({
        status: 201,
        message: "Client deactivated",
        success: true,
        data: client,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        staus: 500,
        message: "Internal server error",
        success: false,
        data: err,
      });
    }
  }
);
//  returns a list of all active clients under this admin
app.get(
  "/all-active-clients",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.role;
      const { page, limit } = req.query;
      const active_clients = await User.find({
        role: "client",
        status: "active",
      });
      if (active_clients.length < 1) {
        res.status(200).json({
          status: 200,
          message: "No client data found.",
          success: false,
          data: null,
        });
      } else {
        // const pagedata = tool.paginatedResult(active_clients, page, limit);
        res.status(200).json({
          status: 200,
          message: "All active clients",
          success: true,
          data: active_clients,
        });
      }
    } catch (err) {
      // res.status(500).json({ status: 500, message: "Internal server error", data: err });
    }
  }
);

//  returns a list of all inactive clients under this admin
app.get(
  "/all-inactive-clients",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.role;
      const { page, limit } = req.query;
      const inactive_clients = await User.find({
        role: "client",
        status: "inactive",
      });
      if (inactive_clients.length < 1) {
        res.status(200).json({
          status: 200,
          message: "No client data found.",
          success: false,
          data: null,
        });
      } else {
        // const pagedata = tool.paginatedResult(active_clients, page, limit);
        res.status(200).json({
          status: 200,
          message: "All inactive clients",
          success: true,
          data: inactive_clients,
        });
      }
    } catch (err) {
      // res.status(500).json({ status: 500, message: "Internal server error", data: err });
    }
  }
);

module.exports = app;

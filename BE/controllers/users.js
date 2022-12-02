var express = require("express");
require("dotenv").config();
const User = require("../model/user");

const Match = require("../model/mcreate");
const records = require("../model/mrecord");
const Session = require("../model/session");
const subLedger = require("../model/subadmin_ledger");
const upcomingPay = require("../model/upcoming_pays");
const cashLedger = require("../model/cash_ledger");
const Login = require("../model/login_report");
const plusMinus = require("../model/plus_minus_report");
const Owner = require("../model/owner");
const Bets = require("../model/bets");
const auth = require("../middleware/auth");
const tool = require("../tools");
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

app.use(function (req, res, next) {
  res.locals.user = req.session.userdetail;
  console.log(req.session.userdetail);
  next();
});

// ////REGISTRATION//////
app.post("/register-subadmin", upload.none(), async (req, res, next) => {
  try {
    const count = await User.estimatedDocumentCount();
    count += 1;

    const { name, password } = req.body;
    if (!(password && name)) {
      res
        .status(200)
        .send({ message: "All input is required", success: false });
    }

    // const oldUser = await User.findOne({ email });
    // if (oldUser) {
    //     return res.status(409).json({ status: 409, message: "User Already Exist. Please Login", success: false, data: oldUser });
    // }

    const user = await User.create({
      uid: "SA" + count,
      name,
      role: "subadmin",
      password: password,
    });
    const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
      expiresIn: "20h",
    });
    user.token = token;
    return res.status(201).json({
      status: 201,
      message: "User creation successful",
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
});

// /////USER LOGIN (all users can login from this login panel)/////////
app.post("/login", upload.none(), async (req, res) => {
  try {
    const { uid, password, createdBy } = req.body;
    if (!(uid && password)) {
      return res.status(200).send({
        status: 200,
        message: "All input is required",
        success: false,
        data: null,
      });
    }
    // console.log(createdBy);
    const user = await User.findOne({
      uid: uid,
      password: password,
      status: "active",
    });
    if (!user) {
      return res.status(200).send({
        status: 200,
        message: "Invalid Credentials",
        success: false,
        data: null,
      });
    }
    const token = jwt.sign(
      { user_id: user._id, uid: user.uid, role: user.role },
      process.env.TOKEN_KEY,
      {
        expiresIn: "20h",
      }
    );
    user.token = token;
    res
      .status(200)
      .json({ status: 200, message: "Logged-in", success: true, data: user });
  } catch (err) {
    console.log(err);
  }
});

// ///////SUB-ADMIN section///////////////////
app.get("/subadmin", sessionCheck.isAuth, upload.none(), async (req, res) => {
  try {
    res
      .status(200)
      .json({ status: 200, message: "SUBADMIN LOGGED-IN", success: true });
  } catch (err) {
    console.log(err);
    res
      .status(200)
      .json({ status: 200, message: err, success: false, data: null });
  }
});

// downline - returns list of all the users created by a particular subadmin /////////
app.post(
  "/subadmin/subadmin-downline",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      owner_uid = req.user.uid;
      role = req.body.role;
      let { page, limit } = req.query;
      const users = await User.find({ createdBy: owner_uid, role: role });
      if (users.length < 1) {
        res.status(200).send({
          status: 200,
          message: "No child users found!",
          success: false,
          data: null,
        });
      } else {
        const pagedata = tool.paginatedResult(users, page, limit);
        res.status(200).json({
          status: 200,
          message:
            "Downline line of subadmin " + owner_uid + " for role : " + role,
          success: true,
          data: pagedata,
        });
      }
    } catch (err) {
      console.log(err);
      console.log(err.message);
      // res.status(200).json({ status: 200, message: err, success: false, dala: null });
    }
  }
);

// subadmin section api to create new masters
app.post(
  "/subadmin/master-create",
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
      const role = "master",
        status = "active";
      if (
        !(password && name && contact_no && limit && share && commissionType)
      ) {
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
      const owner_uid = req.user.uid;
      const subadminUser = await User.findOne({ uid: owner_uid });

      let cStatus;
      if (cassinoStatus == "OFF" || cassinoStatus == "off") {
        cStatus = 0;
      } else if (cassinoStatus == "ON" || cassinoStatus == "on") {
        cStatus = 1;
      }
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
        createdBy: owner_uid,
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
      console.log("\n" + user);

      const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
        expiresIn: "20h",
      });
      let updatedLimit = 0;
      let updatedShare = 0;
      if (subadminUser.limit > user.limit && subadminUser.share > user.share) {
        updatedLimit = subadminUser.limit - user.limit;
        updatedShare = subadminUser.share - user.share;
      }
      await User.updateOne(
        { uid: owner_uid },
        { $set: { limit: updatedLimit, share: updatedShare } }
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

// returns list to all masters created by a particular subadmin (active and inactive included)
app.get(
  "/subadmin/my-masters",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.uid;
      const role = "master";
      let { page, limit } = req.query;
      const masters = await User.find({ role: "master", createdBy: owner_uid });
      if (masters.length < 1) {
        res.status(200).send({
          status: 200,
          message: "No master data found.",
          data: null,
          success: false,
        });
      } else {
        const pagedata = tool.paginatedResult(masters, page, limit);
        res.status(200).json({
          status: 200,
          message: "Masters list",
          success: true,
          data: pagedata,
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

// returns list of all the superagents creted by masters which themselves are crated by a particular subadmin
app.post(
  "/subadmin/master-downline",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      owner_uid = req.user.uid;
      master_uid = req.body.master_uid;
      console.log(master_uid);
      const superagents = await User.find({
        createdBy: owner_uid,
        role: "superagent",
        members: { master: master_uid },
      });
      if (superagents.length < 1) {
        res.status(200).send({
          status: 200,
          message: "No child superagent found!",
          success: false,
          data: null,
        });
      } else {
        res.status(200).json({
          status: 200,
          message: "Downline line of master " + master_uid,
          success: true,
          data: superagents,
        });
      }
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ status: 200, message: err, success: false, dala: null });
    }
  }
);

// returns list of all active master created by a particular subadmin
app.get(
  "/subadmin/master-active/",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.uid;
      console.log(owner_uid);
      const role = "master";
      const masters = await User.find({
        role: "master",
        status: "active",
        createdBy: owner_uid,
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

// returns list of all deactive master created by a particular subadmin
app.get(
  "/subadmin/master-deactive/",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.uid;
      console.log(owner_uid);
      const role = "master";
      const masters = await User.find({
        role: "master",
        status: "inactive",
        createdBy: owner_uid,
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
        message: "InActive Masters",
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

// return details about a master when it's uid is provided
app.post(
  "/subadmin/detail-master",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const uid = req.body.uid;
      const data = await User.find({ uid });
      res
        .status(201)
        .json({ status: 201, message: "Master Details", success: true, data });
    } catch (err) {
      res
        .status(200)
        .json({ status: 200, message: err, success: false, data: null });
    }
  }
);

// api to edit details of partiular master
app.post(
  "/subadmin/edit-master",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const uid = req.body.uid;
      const owner_uid = req.user.uid;
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
      await User.updateOne(
        { uid },
        {
          $set: {
            name: name,
            password: password,
            reference: reference,
            contact_no: contact_no,
            limit: limit,
            share: share,
            cassinoShare: cassinoShare,
            cassinoStatus: cassinoStatus,
            commissionType: commissionType,
            matchCommission: matchCommission,
            sessionCommission: sessionCommission,
          },
        }
      ).exec();

      const updated_user = await User.find({ uid });
      let updatedLimit = 0;
      let updatedShare = 0;
      if (masterUser.limit > limits && masterUser.share > shares) {
        updatedLimit = masterUser.limit - limits;
        updatedShare = masterUser.share - shares;
      }
      let updateMaster = await User.updateOne(
        { uid: owner_uid },
        { $set: { limit: updatedLimit, share: updatedShare } }
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

// api to activate a master account
app.post(
  "/subadmin/activate-master",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid } = req.body;
      await User.updateOne({ uid: uid }, { $set: { status: "active" } }).exec();
      const master = await User.find({ uid: req.body.uid });
      res.status(201).json(master);
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
  "/subadmin/change-master-limit",
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

// api to deactivate a master account
app.post(
  "/subadmin/deactivate-master/",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid } = req.body;
      await User.updateOne(
        { uid: uid, createdBy: req.user.uid },
        { $set: { status: "inactive" } }
      ).exec();
      const master = await User.find({ uid: req.body.uid });
      res.status(201).json(master);
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

// api to deactivate all masters account created by this subadmin
app.post(
  "/subadmin/deactivate-all-master",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      await User.updateMany(
        { role: "master", createdBy: req.user.uid },
        { $set: { status: "inactive" } }
      ).exec();
      const masters = await User.find({});
      res.status(201).json({
        status: 201,
        message: "All masters deactivated",
        success: true,
        data: masters,
      });
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

// api to create a new superagent account by subadmin
app.post(
  "/subadmin/super-agent-create",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      let count = await User.estimatedDocumentCount();
      count += 1;

      const { name, contact_no, password, reference, master } = req.body;
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
      const role = "superagent",
        status = "active";
      if (
        !(password && name && contact_no && limit && share && commissionType)
      ) {
        res.status(200).json({
          status: 200,
          message: "All input is required",
          success: false,
          data: null,
        });
      }

      // const oldUser = await User.findOne({ email });
      // if (oldUser) {
      //     return res.status(409).json({ status: 409, message: "User Already Exist. Please Login", success: false, data: oldUser });
      // }

      // const uid = uidcreate(role,count+1);

      const owner_uid = req.user.uid;
      const masterUser = await User.findOne({ uid: master });
      let cStatus;
      if (cassinoStatus == "OFF" || cassinoStatus == "off") {
        cStatus = 0;
      } else if (cassinoStatus == "ON" || cassinoStatus == "on") {
        cStatus = 1;
      }
      if (!(masterUser.limit > limit && masterUser.share > share)) {
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
        createdBy: owner_uid,
        reference,
        limit,
        share,
        cassinoShare,
        cassinoCommission,
        cassinoStatus: cStatus,
        commissionType,
        matchCommission,
        sessionCommission,
        members: {
          master: master,
        },
      });
      console.log(master);
      const new_agent = User.find({ uid: user.uid });
      let updatedLimit = 0;
      let updatedShare = 0;
      if (masterUser.limit > user.limit && masterUser.share > user.share) {
        updatedLimit = masterUser.limit - user.limit;
        updatedShare = masterUser.share - user.share;
      }
      let updateMaster = await User.updateOne(
        { uid: master },
        { $set: { limit: updatedLimit, share: updatedShare } }
      );
      const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
        expiresIn: "20h",
      });
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

//api to create a superagent account by master
app.post(
  "/master/super-agent-create",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      let count = await User.estimatedDocumentCount();
      count += 1;

      const { name, contact_no, password, reference, master } = req.body;
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
      const role = "superagent",
        status = "active";
      if (
        !(password && name && contact_no && limit && share && commissionType)
      ) {
        res.status(200).json({
          status: 200,
          message: "All input is required",
          success: false,
          data: null,
        });
      }
      const owner_uid = req.user.uid;
      const masterUser = await User.findOne({ uid: owner_uid });
      let cStatus;
      if (cassinoStatus == "OFF" || cassinoStatus == "off") {
        cStatus = 0;
      } else if (cassinoStatus == "ON" || cassinoStatus == "on") {
        cStatus = 1;
      }
      if (!(masterUser.limit > limit && masterUser.share > share)) {
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
        createdBy: owner_uid,
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
      const new_agent = User.find({ uid: user.uid });
      let updatedLimit = 0;
      let updatedShare = 0;
      if (masterUser.limit > user.limit && masterUser.share > user.share) {
        updatedLimit = masterUser.limit - user.limit;
        updatedShare = masterUser.share - user.share;
      }
      await User.updateOne(
        { uid: owner_uid },
        { $set: { limit: updatedLimit, share: updatedShare } }
      );
      const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
        expiresIn: "20h",
      });
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

// returns list of all superagents created by this subadmin (active and inactive included)
app.get(
  "/subadmin/my-superagents",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { page, limit } = req.query;
      const owner_uid = req.user.uid;
      const superagents = await User.find({
        role: "superagent",
        createdBy: owner_uid,
      });
      if (superagents.length < 1) {
        res.status(200).json({
          status: 200,
          message: "No  data found.",
          data: null,
          success: false,
        });
      } else {
        let pagedata = tool.paginatedResult(superagents, page, limit);
        res.status(200).json({
          status: 200,
          message: "Super agent list",
          success: true,
          data: pagedata,
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

// return list of all active superagent created by a subadmin
app.get(
  "/subadmin/all-active-superagents",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.uid;
      const { page, limit } = req.query;
      const active_superagents = await User.find({
        role: "superagent",
        createdBy: owner_uid,
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
        const pagedata = tool.paginatedResult(active_superagents, page, limit);
        res.status(200).json({
          status: 200,
          message: "All active Super agents",
          success: true,
          data: pagedata,
        });
      }
    } catch (err) {
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

// return list of all deactive superagent created by a subadmin
app.get(
  "/subadmin/all-deactive-superagents",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.uid;
      const { page, limit } = req.query;
      const active_superagents = await User.find({
        role: "superagent",
        createdBy: owner_uid,
        status: "inactive",
      });
      if (active_superagents.length < 1) {
        res.status(200).json({
          status: 200,
          message: "No superagent data found.",
          success: false,
          data: null,
        });
      } else {
        const pagedata = tool.paginatedResult(active_superagents, page, limit);
        res.status(200).json({
          status: 200,
          message: "All inactive Super agents",
          success: true,
          data: pagedata,
        });
      }
    } catch (err) {
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

//  return a list of all agents created by superagents which themselves are created by this subadmin
app.post(
  "/subadmin/superagent-downline",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      owner_uid = req.user.uid;
      const { page, limit } = req.query;
      superagent_uid = req.body.superagent_uid;
      const agents = await User.find({
        createdBy: owner_uid,
        role: "agent",
        members: { superagent: superagent_uid },
      });
      if (agents.length < 1) {
        res.status(200).send({
          status: 200,
          message: "No child agents found!",
          success: false,
          data: null,
        });
      } else {
        pagedata = tool.paginatedResult(agents, page, limit);
        res.status(200).json({
          status: 200,
          message: "Downline line of superagent " + superagent_uid,
          success: true,
          data: agents,
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

// return details of a supergent agent account when uid is provided
app.post(
  "/subadmin/detail-superagent",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.uid;
      const uid = req.body.uid;
      const superagent = await User.find({
        uid: uid,
        createdBy: owner_uid,
        role: "superagent",
      });
      console.log(superagent.lngth);
      if (superagent.length < 1) {
        res.status(200).json({
          status: 200,
          message: "No superagent found",
          success: false,
          data: null,
        });
      }
      res.status(200).json({
        status: 200,
        message: "Super Agent Detail",
        success: true,
        data: superagent,
      });
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

// api to edit informations of an existing superagent account
app.post(
  "/subadmin/edit-superagent",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const uid = req.body.uid;
      const owner_uid = req.user.uid;
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
      await User.updateOne(
        { uid },
        {
          $set: {
            name: name,
            password: password,
            reference: reference,
            contact_no: contact_no,
            limit: limit,
            share: share,
            cassinoShare: cassinoShare,
            cassinoStatus: cassinoStatus,
            commissionType: commissionType,
            matchCommission: matchCommission,
            sessionCommission: sessionCommission,
          },
        }
      ).exec();
      const updated_user = await User.findOne({ uid });
      let updatedLimit = 0;
      let updatedShare = 0;
      if (masterUser.limit > limits && masterUser.share > shares) {
        updatedLimit = masterUser.limit - limits;
        updatedShare = masterUser.share - shares;
      }
      let updateMaster = await User.updateOne(
        { uid: owner_uid },
        { $set: { limit: updatedLimit, share: updatedShare } }
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

//api to edit superagent by master
app.post(
  "/master/edit-superagent",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const uid = req.body.uid;
      const { name, contact_no, password, reference, master } = req.body;
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
      const oldUser = await User.findOne({ uid: uid });
      let limits = limit - oldUser.limit;
      let shares = share - oldUser.share;
      let owner_uid = req.user.uid;
      const masterUser = await User.findOne({ uid: owner_uid });
      if (!(masterUser.limit > limits && masterUser.share > shares)) {
        return res.status(200).json({
          status: 200,
          message: "Incorrect Input of limit or share",
          success: false,
        });
      }
      await User.updateOne(
        { uid },
        {
          $set: {
            name: name,
            password: password,
            reference: reference,
            contact_no: contact_no,
            limit: limit,
            share: share,
            cassinoShare: cassinoShare,
            cassinoStatus: cassinoStatus,
            commissionType: commissionType,
            matchCommission: matchCommission,
            sessionCommission: sessionCommission,
          },
        }
      ).exec();
      const updated_user = await User.findOne({ uid });
      let updatedLimit = 0;
      let updatedShare = 0;
      if (masterUser.limit > limits && masterUser.share > shares) {
        updatedLimit = masterUser.limit - limits;
        updatedShare = masterUser.share - shares;
      }
      let updateMaster = await User.updateOne(
        { uid: owner_uid },
        { $set: { limit: updatedLimit, share: updatedShare } }
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

//  acitvate an inactive superagent account
app.post(
  "/subadmin/activate-superagent",
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
      // res.status(500).json({ staus: 500, message: 'Internal server error', success: false, data: err });
    }
  }
);

// changes the limit of a superagent account
app.post(
  "/subadmin/change-superagent-limit",
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

//api to change limit of superagent by master
app.post(
  "/master/change-superagent-limit",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid, limit, value } = req.body;
      const owner_uid = req.user.uid;
      const ownerData = await User.findOne({ uid: owner_uid, role: "master" });
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
          message: "limit value is incorrect",
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

//  deactivates a superagent account
app.post(
  "/subadmin/deactivate-superagent/",
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
      // res.status(500).json({ staus: 500, message: 'Internal server error', success: false, data: err });
    }
  }
);

//  deactivates all superagent created by this subadmin
app.post(
  "/subadmin/deactivate-all-superagents",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      await User.updateMany(
        { role: "superagent", createdBy: req.user.uid },
        { $set: { status: "inactive" } }
      ).exec();
      res.status(201).json({
        status: 201,
        message: "All superagents deactivated",
        success: true,
      });
    } catch (err) {
      console.log(err);
      // res.status(500).json({ staus: 500, message: 'Internal server error', success: false, data: err });
    }
  }
);

// api to create a new agent by subadmin
app.post(
  "/subadmin/agent-create",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      let count = await User.estimatedDocumentCount();
      count += 1;

      const { name, contact_no, password, reference, superagent } = req.body;
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
      const role = "agent",
        status = "active";
      if (
        !(password && name && contact_no && limit && share && commissionType)
      ) {
        res.status(200).json({
          status: 200,
          message: "All input is required",
          success: false,
          data: null,
        });
      }

      // const oldUser = await User.findOne({ email });
      // if (oldUser) {
      //     return res.status(409).json({ status: 409, message: "User Already Exist. Please Login", success: false, data: oldUser });
      // }

      const owner_uid = req.user.uid;
      const superagentUser = await User.findOne({ uid: superagent });

      let cStatus;
      if (cassinoStatus == "OFF" || cassinoStatus == "off") {
        cStatus = 0;
      } else if (cassinoStatus == "ON" || cassinoStatus == "on") {
        cStatus = 1;
      }
      if (!(superagentUser.limit > limit && superagentUser.share > share)) {
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
        createdBy: owner_uid,
        reference,
        limit,
        share,
        cassinoShare,
        cassinoCommission,
        cassinoStatus: cStatus,
        commissionType,
        matchCommission,
        sessionCommission,
        members: {
          superagent: superagent,
        },
      });

      const new_agent = User.find({ uid: user.uid });
      console.log(new_agent);
      const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
        expiresIn: "20h",
      });
      let updatedLimit = 0;
      let updatedShare = 0;
      if (
        superagentUser.limit > user.limit &&
        superagentUser.share > user.share
      ) {
        updatedLimit = superagentUser.limit - user.limit;
        updatedShare = superagentUser.share - user.share;
      }
      let updateSuperAgent = await User.updateOne(
        { uid: superagent },
        { $set: { limit: updatedLimit, share: updatedShare } }
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
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

//api to create a new agent by superagent
app.post(
  "/superagent/agent-create",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      let count = await User.estimatedDocumentCount();
      count += 1;

      const { name, contact_no, password, reference, superagent } = req.body;
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
      const role = "agent",
        status = "active";
      if (
        !(password && name && contact_no && limit && share && commissionType)
      ) {
        res.status(200).json({
          status: 200,
          message: "All input is required",
          success: false,
          data: null,
        });
      }

      const owner_uid = req.user.uid;
      const superagentUser = await User.findOne({ uid: owner_uid });

      let cStatus;
      if (cassinoStatus == "OFF" || cassinoStatus == "off") {
        cStatus = 0;
      } else if (cassinoStatus == "ON" || cassinoStatus == "on") {
        cStatus = 1;
      }
      if (!(superagentUser.limit > limit && superagentUser.share > share)) {
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
        createdBy: owner_uid,
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

      const new_agent = User.find({ uid: user.uid });
      let updatedLimit = 0;
      let updatedShare = 0;
      if (
        superagentUser.limit > user.limit &&
        superagentUser.share > user.share
      ) {
        updatedLimit = superagentUser.limit - user.limit;
        updatedShare = superagentUser.share - user.share;
      }
      let updateSuperAgent = await User.updateOne(
        { uid: owner_uid },
        { $set: { limit: updatedLimit, share: updatedShare } }
      );
      const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
        expiresIn: "20h",
      });

      user.token = token;
      return res.status(201).json({
        status: 201,
        message: "Agent creation successful",
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

// returns a list of all agents creted by this subadmin (active and inactive included)
app.get(
  "/subadmin/my-agents",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.uid;
      const { page, limit } = req.query;
      const agents = await User.find({ role: "agent", createdBy: owner_uid });
      if (agents.length < 1) {
        res.status(200).json({
          status: 200,
          message: "No  data found.",
          data: null,
          success: false,
        });
      } else {
        const pagedata = tool.paginatedResult(agents, page, limit);
        res.status(200).json({
          status: 200,
          message: "Super agent list",
          success: true,
          data: pagedata,
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

// returns a list of all active agents created by this subadmin
app.get(
  "/subadmin/all-active-agents",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.uid;
      const { page, limit } = req.query;
      const active_agents = await User.find({
        role: "agent",
        createdBy: owner_uid,
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
        const pagedata = tool.paginatedResult(active_agents, page, limit);
        res.status(200).json({
          status: 200,
          message: "All active agents",
          success: true,
          data: pagedata,
        });
      }
    } catch (err) {
      // res.status(500).json({ status: 500, message: "Internal server error", data: err });
    }
  }
);

// returns a list of all deactive agents created by this subadmin
app.get(
  "/subadmin/all-deactive-agents",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.uid;
      const { page, limit } = req.query;
      const active_agents = await User.find({
        role: "agent",
        createdBy: owner_uid,
        status: "inactive",
      });
      if (active_agents.length < 1) {
        res.status(200).json({
          status: 200,
          message: "No agent data found.",
          success: false,
          data: null,
        });
      } else {
        const pagedata = tool.paginatedResult(active_agents, page, limit);
        res.status(200).json({
          status: 200,
          message: "All inactive agents",
          success: true,
          data: pagedata,
        });
      }
    } catch (err) {
      // res.status(500).json({ status: 500, message: "Internal server error", data: err });
    }
  }
);

// returns a list of all clients created by agents which themselves are created by a subadmin
app.post(
  "/subadmin/agent-downline",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      owner_uid = req.user.uid;
      agent_uid = req.body.agent_uid;
      const { page, limit } = req.query;
      const clients = await User.find({
        createdBy: owner_uid,
        role: "client",
        members: { agent: agent_uid },
      });
      if (clients.length < 1) {
        res.status(200).send({
          status: 200,
          message: "No child clients found!",
          success: false,
          data: null,
        });
      } else {
        const pagedata = tool.paginatedResult(clients, page, limit);
        res.status(200).json({
          status: 200,
          message: "Downline line of agent " + agent_uid,
          success: true,
          data: pagedata,
        });
      }
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: false, dala: null });
    }
  }
);

// returns details about an agent account
app.post(
  "/subadmin/detail-agent",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.uid;
      const uid = req.body.uid;
      const agent = await User.find({
        uid: uid,
        createdBy: owner_uid,
        role: "agent",
      });
      console.log(agent);
      if (agent.length < 1) {
        res.status(200).json({
          status: 200,
          message: "No agent found",
          success: false,
          data: null,
        });
      }
      res.status(200).json({
        status: 200,
        message: "Agent Detail",
        success: true,
        data: agent,
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
  "/subadmin/edit-agent",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const uid = req.body.uid;
      const owner_uid = req.user.uid;
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
      await User.updateOne(
        { uid },
        {
          $set: {
            name: name,
            password: password,
            reference: reference,
            contact_no: contact_no,
            limit: limit,
            share: share,
            cassinoShare: cassinoShare,
            cassinoStatus: cassinoStatus,
            commissionType: commissionType,
            matchCommission: matchCommission,
            sessionCommission: sessionCommission,
          },
        }
      ).exec();
      const updated_user = await User.find({ uid });
      let updatedLimit = 0;
      let updatedShare = 0;
      if (masterUser.limit > limits && masterUser.share > shares) {
        updatedLimit = masterUser.limit - limits;
        updatedShare = masterUser.share - shares;
      }
      let updateMaster = await User.updateOne(
        { uid: owner_uid },
        { $set: { limit: updatedLimit, share: updatedShare } }
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

//api to edit agent by superagent
app.post(
  "/superagent/edit-agent",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const uid = req.body.uid;
      const { name, contact_no, password, reference, superagent } = req.body;
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
      const oldUser = await User.findOne({ uid: uid });
      let limits = limit - oldUser.limit;
      let shares = share - oldUser.share;
      let owner_uid = req.user.uid;
      const masterUser = await User.findOne({ uid: owner_uid });
      if (!(masterUser.limit > limits && masterUser.share > shares)) {
        return res.status(200).json({
          status: 200,
          message: "Incorrect Input of limit or share",
          success: false,
        });
      }
      await User.updateOne(
        { uid },
        {
          $set: {
            name: name,
            password: password,
            reference: reference,
            contact_no: contact_no,
            limit: limit,
            share: share,
            cassinoShare: cassinoShare,
            cassinoStatus: cassinoStatus,
            commissionType: commissionType,
            matchCommission: matchCommission,
            sessionCommission: sessionCommission,
          },
        }
      ).exec();
      const updated_user = await User.find({ uid });
      let updatedLimit = 0;
      let updatedShare = 0;
      if (masterUser.limit > limits && masterUser.share > shares) {
        updatedLimit = masterUser.limit - limits;
        updatedShare = masterUser.share - shares;
      }
      let updateMaster = await User.updateOne(
        { uid: owner_uid },
        { $set: { limit: updatedLimit, share: updatedShare } }
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

//  api to active an inactive agent
app.post(
  "/subadmin/activate-agent",
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
      // res.status(500).json({ staus: 500, message: 'Internal server error', success: false, data: err });
    }
  }
);

//  api to change limit of an agent
app.post(
  "/subadmin/change-agent-limit",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid, limit } = req.body;
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
          { $set: { limit: limit } }
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

//api to change limit of agent by superagent
app.post(
  "/superagent/change-agent-limit",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid, limit } = req.body;
      const owner_uid = req.user.uid;
      const ownerData = await User.findOne({ uid: owner_uid });
      const oldUser = await User.findOne({ uid: uid });
      let limits = 0;
      let superagentLimit = 0;
      if (value == 0) {
        limits = oldUser.limit - limit;
        superagentLimit = ownerData.limit + Number(limit);
      } else {
        limits = oldUser.limit + Number(limit);
        superagentLimit = ownerData.limit - limit;
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
          { $set: { limit: limit } }
        );
        await User.updateOne(
          { uid: owner_uid },
          { $set: { limit: superagentLimit } }
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

// api to deactivate an agent
app.post(
  "/subadmin/deactivate-agent/",
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
      // res.status(500).json({ staus: 500, message: 'Internal server error', success: false, data: err });
    }
  }
);

//  api to deactive all agents created by this subadmin
app.post(
  "/subadmin/deactivate-all-agents",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      await User.updateMany(
        { role: "agent", createdBy: req.user.uid },
        { $set: { status: "inactive" } }
      ).exec();
      const agents = await User.find({
        role: "agent",
        createdBy: req.user.uid,
      });
      res.status(201).json({
        status: 201,
        message: "All agents deactivated",
        success: true,
        data: agents,
      });
    } catch (err) {
      console.log(err);
      // res.status(500).json({ staus: 500, message: 'Internal server error', success: false, data: err });
    }
  }
);

// api to create a new client by subadmin
app.post(
  "/subadmin/client-create",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      let count = await User.estimatedDocumentCount();
      count += 1;

      const { name, contact_no, password, reference, agent } = req.body;
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
      const role = "client",
        status = "active";
      if (
        !(password && name && contact_no && limit && share && commissionType)
      ) {
        res.status(200).json({
          status: 200,
          message: "All input is required",
          success: false,
          data: null,
        });
      }
      // const oldUser = await User.findOne({ email });
      // if (oldUser) {
      //     return res.status(409).json({ status: 409, message: "User Already Exist. Please Login", success: false, data: oldUser });
      // }
      const owner_uid = req.user.uid;
      const agentUser = await User.findOne({ uid: agent });

      let cStatus;
      if (cassinoStatus == "OFF" || cassinoStatus == "off") {
        cStatus = 0;
      } else if (cassinoStatus == "ON" || cassinoStatus == "on") {
        cStatus = 1;
      }

      if (!(agentUser.limit > limit && agentUser.share > share)) {
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
        createdBy: owner_uid,
        reference,
        limit,
        share,
        cassinoShare,
        cassinoCommission,
        cassinoStatus: cStatus,
        commissionType,
        matchCommission,
        sessionCommission,
        members: {
          agent: agent,
        },
      });
      const new_client = User.find({ uid: user.uid });
      let updatedLimit = 0;
      let updatedShare = 0;
      if (agentUser.limit > user.limit && agentUser.share > user.share) {
        updatedLimit = agentUser.limit - user.limit;
        updatedShare = agentUser.share - user.share;
      }
      let updateAgent = await User.updateOne(
        { uid: agent },
        { $set: { limit: updatedLimit, share: updatedShare } }
      );
      if (user) {
        const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
          expiresIn: "20h",
        });
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

//api to create a new client by agent
app.post(
  "/agent/client-create",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      let count = await User.estimatedDocumentCount();
      count += 1;

      const { name, contact_no, password, reference, agent } = req.body;
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
      const role = "client",
        status = "active";
      if (
        !(password && name && contact_no && limit && share && commissionType)
      ) {
        res.status(200).json({
          status: 200,
          message: "All input is required",
          success: false,
          data: null,
        });
      }
      // const oldUser = await User.findOne({ email });
      // if (oldUser) {
      //     return res.status(409).json({ status: 409, message: "User Already Exist. Please Login", success: false, data: oldUser });
      // }
      const owner_uid = req.user.uid;
      const agentUser = await User.findOne({ uid: owner_uid });

      let cStatus;
      if (cassinoStatus == "OFF" || cassinoStatus == "off") {
        cStatus = 0;
      } else if (cassinoStatus == "ON" || cassinoStatus == "on") {
        cStatus = 1;
      }

      if (!(agentUser.limit > limit && agentUser.share > share)) {
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
        createdBy: owner_uid,
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
      const new_client = User.find({ uid: user.uid });
      let updatedLimit = 0;
      let updatedShare = 0;
      if (agentUser.limit > user.limit && agentUser.share > user.share) {
        updatedLimit = agentUser.limit - user.limit;
        updatedShare = agentUser.share - user.share;
      }
      let updateAgent = await User.updateOne(
        { uid: owner_uid },
        { $set: { limit: updatedLimit, share: updatedShare } }
      );
      if (user) {
        const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
          expiresIn: "20h",
        });
        user.token = token;
        return res.status(201).json({
          status: 201,
          message: "Client creation succe              ssful",
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

//  returns a list of all clients created by this subadmin (active and inactive included)
app.get(
  "/subadmin/my-clients",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.uid;
      const { page, limit } = req.query;
      const clients = await User.find({ role: "client", createdBy: owner_uid });
      if (clients.length < 1) {
        res.status(200).json({
          status: 200,
          message: "No  data found.",
          data: null,
          success: false,
        });
      } else {
        const pagedata = tool.paginatedResult(clients, page, limit);
        res.status(200).json({
          status: 200,
          message: "Client list",
          success: true,
          data: pagedata,
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

//  returns a list of all active clients under this subadmin
app.get(
  "/subadmin/all-active-clients",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.uid;
      const { page, limit } = req.query;
      const active_clients = await User.find({
        role: "client",
        createdBy: owner_uid,
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
        const pagedata = tool.paginatedResult(active_clients, page, limit);
        res.status(200).json({
          status: 200,
          message: "All active clients",
          success: true,
          data: pagedata,
        });
      }
    } catch (err) {
      // res.status(500).json({ status: 500, message: "Internal server error", data: err });
    }
  }
);

//  returns a list of all deactive clients under this subadmin
app.get(
  "/subadmin/all-deactive-clients",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.uid;
      const { page, limit } = req.query;
      const active_clients = await User.find({
        role: "client",
        createdBy: owner_uid,
        status: "inactive",
      });
      if (active_clients.length < 1) {
        res.status(200).json({
          status: 200,
          message: "No client data found.",
          success: false,
          data: null,
        });
      } else {
        const pagedata = tool.paginatedResult(active_clients, page, limit);
        res.status(200).json({
          status: 200,
          message: "All inactive clients",
          success: true,
          data: pagedata,
        });
      }
    } catch (err) {
      // res.status(500).json({ status: 500, message: "Internal server error", data: err });
    }
  }
);

// returns details about a client account when uid is provided
app.post(
  "/subadmin/detail-client",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const owner_uid = req.user.uid;
      const uid = req.body.uid;
      console.log(uid);
      const client = await User.find({
        uid: uid,
        createdBy: owner_uid,
        role: "client",
      });
      console.log(client);
      if (client.length < 1) {
        res.status(200).json({
          status: 200,
          message: "No client found",
          success: false,
          data: null,
        });
      } else {
        res.status(200).json({
          status: 200,
          message: "Client details",
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
  }
);

//  api to edit information about a client account
app.post(
  "/subadmin/edit-client",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const uid = req.body.uid;
      const owner_uid = req.user.uid;
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
      await User.updateOne(
        { uid },
        {
          $set: {
            name: name,
            password: password,
            reference: reference,
            contact_no: contact_no,
            limit: limit,
            share: share,
            cassinoShare: cassinoShare,
            cassinoStatus: cassinoStatus,
            commissionType: commissionType,
            matchCommission: matchCommission,
            sessionCommission: sessionCommission,
          },
        }
      ).exec();

      const updated_user = await User.find({ uid });

      let updatedLimit = 0;
      let updatedShare = 0;
      if (masterUser.limit > limits && masterUser.share > shares) {
        updatedLimit = masterUser.limit - limits;
        updatedShare = masterUser.share - shares;
      }
      let updateMaster = await User.updateOne(
        { uid: owner_uid },
        { $set: { limit: updatedLimit, share: updatedShare } }
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

//api to edit client by agent
app.post(
  "/agent/edit-client",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const uid = req.body.uid;
      const { name, contact_no, password, reference, agent } = req.body;
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
      const oldUser = await User.findOne({ uid: uid });
      let limits = limit - oldUser.limit;
      let shares = share - oldUser.share;
      let owner_uid = req.user.uid;
      const masterUser = await User.findOne({ uid: owner_uid });
      if (!(masterUser.limit > limits && masterUser.share > shares)) {
        return res.status(200).json({
          status: 200,
          message: "Incorrect Input of limit or share",
          success: false,
        });
      }
      await User.updateOne(
        { uid },
        {
          $set: {
            name: name,
            password: password,
            reference: reference,
            contact_no: contact_no,
            limit: limit,
            share: share,
            cassinoShare: cassinoShare,
            cassinoStatus: cassinoStatus,
            commissionType: commissionType,
            matchCommission: matchCommission,
            sessionCommission: sessionCommission,
          },
        }
      ).exec();

      const updated_user = await User.find({ uid });

      let updatedLimit = 0;
      let updatedShare = 0;
      if (masterUser.limit > limits && masterUser.share > shares) {
        updatedLimit = masterUser.limit - limits;
        updatedShare = masterUser.share - shares;
      }
      let updateMaster = await User.updateOne(
        { uid: owner_uid },
        { $set: { limit: updatedLimit, share: updatedShare } }
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

//  api to active an inactive client account
app.post(
  "/subadmin/activate-client",
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
      // res.status(500).json({ staus: 500, message: 'Internal server error', success: false, data: err });
    }
  }
);

//  api to change limit of a client account
app.post(
  "/subadmin/change-client-limit",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid, limit } = req.body;
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
      limits = oldUser.limit + Number(limit);
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
          { $set: { limit: limit } }
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

//api to change limit of client by agent
app.post(
  "/agent/change-client-limit",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid, limit } = req.body;
      const owner_uid = req.user.uid;
      const ownerData = await User.findOne({ uid: owner_uid });
      const oldUser = await User.findOne({ uid: uid });
      let limits = 0;
      let agentLimit = 0;
      if (value == 0) {
        limits = oldUser.limit - limit;
        agentLimit = ownerData.limit + Number(limit);
      } else {
        limits = oldUser.limit + Number(limit);
        agentLimit = ownerData.limit - limit;
      }
      limits = oldUser.limit + Number(limit);
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
          { $set: { limit: limit } }
        );
        await User.updateOne(
          { uid: owner_uid },
          { $set: { limit: agentLimit } }
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

// api to deactivate a client account
app.post(
  "/subadmin/deactivate-client/",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const uid = req.body.uid;
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
      // res.status(500).json({ staus: 500, message: 'Internal server error', success: false, data: err });
    }
  }
);

// api to deactivate all client account unders this subadmin
app.post(
  "/subadmin/deactivate-all-clients",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      await User.updateMany(
        { role: "client", createdBy: req.user.uid },
        { $set: { status: "inactive" } }
      ).exec();
      res.status(201).json({
        status: 201,
        message: "All agents deactivated",
        success: true,
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

// return list of matches in play
app.get(
  "/subadmin/in-play",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const matches = await Match.find({ status: "active" });
      const { page, limit } = req.query;
      if (matches.length < 1) {
        res.status(200).json({
          status: 200,
          message: "No match data vailable",
          success: false,
          data: null,
        });
      } else {
        const pagedata = tool.paginatedResult(matches, page, limit);
        res.status(200).json({
          status: 200,
          message: "In-play data",
          success: true,
          data: pagedata,
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

// COMPLETE GAMES
//  returns list of complete games
app.get(
  "/subadmin/complete-game",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { page, limit } = req.query;
      const match_data = await Match.find({ status: "complete" });
      if (match_data.length < 1) {
        res
          .status(200)
          .json({ status: 200, message: "No match data", success: false });
      } else {
        const pagedata = tool.paginatedResult(match_data, page, limit);
        res.status(200).json({
          status: 200,
          message: "Complete matches",
          success: true,
          data: pagedata,
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

// return plus/minus report
app.post(
  "/subadmin/complete-game/plus-minus-report",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { market_id, preference } = req.body;
      const session = await Session.find({ market_id, status: "declared" });

      if (session.length < 1) {
        res
          .status(200)
          .json({ status: 200, message: "no data", success: false });
      } else {
        res
          .status(200)
          .json({ status: 200, message: "report", success: true, data: data });
      }
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

// display all the match and session bets placed by any or all clients created by this subadmin
app.post(
  "/subadmin/complete-game/bets-details",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { market_id, client_uid } = req.body;
      const match = await Match.findOne({ market_id });
      const matchbet = await Bets.find({ market_id, type: "match" });
      const session = await Bets.find({ market_id, type: "session" });
      const data = {
        team1: match.team1,
        team2: match.team2,
        match_bets: matchbet,
        session_bets: session,
      };
      res.status(200).json({
        status: 200,
        message: "Match & Session bets",
        success: true,
        data: data,
      });
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

// display all match bets placed by any or all clients created by this subadmin
app.post(
  "/subadmin/complete-game/match-bets-details",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { market_id, client_uid } = req.body;
      const match = await Match.findOne({ market_id });
      let team1 = match.team1;
      let team2 = match.team2;
      let bets;
      if (client_uid.length < 1) {
        bets = await Bets.find({ market_id, bet_type: "match" });
      } else {
        bets = await Bets.find({ market_id, client_uid, bet_type: "match" });
      }
      const data = { team1: team1, team2: team2, bets: bets };
      res.status(200).json({
        status: 200,
        message: "match bet details",
        success: true,
        data: data,
      });
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

// display all session bets placed by any or all clients created by this subadmin
app.post(
  "/subadmin/complete-game/session-bets-details",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { market_id, client_uid } = req.body;
      const match = await Match.findOne({ market_id });

      let bets;
      if (client_uid.length < 1) {
        bets = await Bets.find({ market_id, bet_type: "match" });
      } else {
        bets = await Bets.find({ market_id, client_uid, bet_type: "match" });
      }
      const data = { team1: match.team1, team2: match.team2, bets: bets };
      res.status(200).json({
        status: 200,
        message: "session bet details",
        success: true,
        data: data,
      });
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .json({ staus: 200, message: err, success: false, data: null });
    }
  }
);

//  api to insert a record in ledgers
app.post(
  "/subadmin/ledger-insert",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { date, collection_name, debit, credit, payment_type, remark } =
        req.body;
      if (!(date && collection_name && payment_type)) {
        res.status(200).json({
          status: 200,
          message: "In-sufficient data",
          success: false,
          data: null,
        });
      } else {
        const count = await subLedger.estimatedDocumentCount();
        const id = count + 1;
        const subadmin_uid = req.user.uid;
        const user = await User.findOne({ uid: subadmin_uid });
        const balance = user.wallet + (credit - debit);
        const data = await subLedger.create({
          id,
          subadmin_uid,
          date,
          collection_name,
          debit,
          credit,
          balance,
          payment_type,
          remark,
        });
        res.status(201).json({
          status: 201,
          message: "Ledger entry success",
          success: true,
          data: data,
        });
      }
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: true, data: null });
    }
  }
);

//  return ledgers records
app.get(
  "/subadmin/my-ledger",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      let data = await subLedger
        .find({ subadmin_uid: req.user.uid })
        .sort({ id: -1 });
      const { page, limit } = req.query;
      const result = await subLedger.aggregate([
        { $match: { subadmin_uid: req.user.uid } },
        {
          $group: {
            _id: null,
            credit: { $sum: "$credit" },
            debit: { $sum: "$debit" },
          },
        },
      ]);
      let total_credit = result[0].credit;
      let total_debit = -1 * result[0].debit;
      let final_balance = total_credit + total_debit;

      let newobj = {};
      Object.assign(newobj, {
        total_credit: total_credit,
        total_debit: total_debit,
        final_balance: final_balance,
      });

      if (data.length < 1) {
        res.status(200).json({
          status: 200,
          message: "No data found",
          success: false,
          data: null,
        });
      } else {
        const pagedata = tool.paginatedResult(data, page, limit);
        res.status(200).json({
          status: 200,
          message: "Ledger data for : " + req.user.uid,
          success: true,
          head: newobj,
          data: pagedata,
        });
      }
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: true, data: null });
    }
  }
);

// Client plus minus section
//  api to insert a record in client plus minus
app.post(
  "/subadmin/client-plus-minus-insert",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid, market_id, match_amount, session_amount } = req.body;
      let date = new Date(req.body.date);
      if (!(uid, market_id)) {
        res.status(200).json({
          status: 200,
          message: "In-sufficient data",
          success: false,
          data: null,
        });
      }
      const id = (await plusMinus.estimatedDocumentCount()) + 1;

      const user = await User.findOne({ uid, role: "client" });
      if (!user) {
        res
          .status(200)
          .json({ status: 200, message: "Invalid UID", success: false });
      }

      const match = await Match.findOne({ market_id });
      if (!match) {
        res
          .status(200)
          .json({ status: 200, message: "Invalid marketID", success: false });
      }

      let total = Number(match_amount) + Number(session_amount);
      let balance = Number(user.wallet) + Number(total);
      const data = await plusMinus.create({
        id,
        uid,
        date,
        market_id,
        match_name: match.name,
        match_amount,
        session_amount,
        total,
        balance,
      });
      res.status(201).json({
        status: 201,
        message: "Record inserted",
        success: true,
        data: data,
      });
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: true, data: null });
    }
  }
);

// return the plus minus record of a client
app.post(
  "/subadmin/client-plus-minus",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      let { uid, to, from } = req.body;
      if (!(uid, to, from)) {
        res
          .status(200)
          .json({ status: 200, message: "Insufficient input", success: false });
      }
      const user = await User.findOne({ uid, createdBy: req.user.uid });
      if (!user) {
        res
          .status(200)
          .json({ status: 200, message: "Invalid UID", success: false });
      } else {
        to = new Date(to);
        from = new Date(from);
        const data = await plusMinus.find({
          uid,
          date: { $gte: from, $lte: to },
        });
        if (data.length < 1) {
          res
            .status(200)
            .json({ status: 200, message: "No records found", success: false });
        } else {
          const result = await plusMinus.aggregate([
            { $match: { uid: uid, date: { $gte: from, $lte: to } } },
            {
              $group: {
                _id: 1,
                total_match_amount: { $sum: "$match_amount" },
                total_session_amount: { $sum: "$session_amount" },
                total: { $sum: "$total" },
              },
            },
          ]);
          res.status(200).json({
            status: 200,
            message: "Plus Minus Records",
            success: true,
            details: {
              data: data,
              total_match_amount: result[0].total_match_amount,
              total_session_amount: result[0].total_session_amount,
              total: result[0].total,
            },
          });
        }
      }
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: true, data: null });
    }
  }
);

// User upcoming payment ledger entry
app.post(
  "/subadmin/user-upcoming-ledger-insert",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid, amount, type } = req.body;
      if (!(uid, amount, type)) {
        res.status(200).json({
          status: 200,
          message: "In-sufficient input",
          success: false,
        });
      }
      const user = await User.findOne({ uid: uid, creadtedBy: req.user.uid });
      if (!user) {
        res
          .status(200)
          .json({ status: 200, message: "Invaid uid", success: false });
      } else {
        const data = await upcomingPay.create({
          uid,
          date: new Date(),
          role: user.role,
          name: user.name,
          contact_no: user.contact_no,
          createdBy: req.user.uid,
          open_bal: amount,
          close_bal: amount,
          type,
        });
        res.status(201).json({
          status: 201,
          message: "Record created",
          success: true,
          data: data,
        });
      }
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: true, data: null });
    }
  }
);

//  Returns upcoming payment ledger of clients
app.get(
  "/subadmin/all-client-ledger",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { page, limit } = req.query;
      let lena = await upcomingPay.find({ role: "client", type: 0 });
      let dena = await upcomingPay.find({ role: "client", type: 1 });
      const lena_result = await upcomingPay.aggregate([
        { $match: { createdBy: req.user.uid, role: "client", type: 0 } },
        {
          $group: {
            _id: 1,
            total_open_balance: { $sum: "$open_bal" },
            total_close_balance: { $sum: "$close_bal" },
          },
        },
      ]);
      const dena_result = await upcomingPay.aggregate([
        { $match: { createdBy: req.user.uid, role: "client", type: 1 } },
        {
          $group: {
            _id: 2,
            total_open_balance: { $sum: "$open_bal" },
            total_close_balance: { $sum: "$close_bal" },
          },
        },
      ]);
      lena = tool.paginatedResult(lena, page, limit);
      dena = tool.paginatedResult(dena, page, limit);
      res.status(200).json({
        status: 200,
        message: "all client ledger",
        lena_records: lena.length,
        lena_total_opening_balance: lena_result[0].total_open_balance,
        lena_total_closing_balance: lena_result[0].total_close_balance,
        lena_hai: lena,
        dena_records: dena.length,
        dena_total_opening_balance: dena_result[0].total_open_balance,
        dena_total_closing_balance: dena_result[0].total_close_balance,
        dena_hai: dena,
      });
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: true, data: null });
    }
  }
);

//  Returns upcoming payment ledger of superagents
app.get(
  "/subadmin/all-superagent-ledger",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { page, limit } = req.query;
      let lena = await upcomingPay.find({ role: "superagent", type: 0 });
      let dena = await upcomingPay.find({ role: "superagent", type: 1 });
      const lena_result = await upcomingPay.aggregate([
        { $match: { createdBy: req.user.uid, role: "superagent", type: 0 } },
        {
          $group: {
            _id: 1,
            total_open_balance: { $sum: "$open_bal" },
            total_close_balance: { $sum: "$close_bal" },
          },
        },
      ]);
      const dena_result = await upcomingPay.aggregate([
        { $match: { createdBy: req.user.uid, role: "superagent", type: 1 } },
        {
          $group: {
            _id: 2,
            total_open_balance: { $sum: "$open_bal" },
            total_close_balance: { $sum: "$close_bal" },
          },
        },
      ]);
      lena = tool.paginatedResult(lena, page, limit);
      dena = tool.paginatedResult(dena, page, limit);
      res.status(200).json({
        status: 200,
        message: "all superagent ledger",
        lena_records: lena.length,
        lena_total_opening_balance: lena_result[0].total_open_balance,
        lena_total_closing_balance: lena_result[0].total_close_balance,
        lena_hai: lena,
        dena_records: dena.length,
        dena_total_opening_balance: dena_result[0].total_open_balance,
        dena_total_closing_balance: dena_result[0].total_close_balance,
        dena_hai: dena,
      });
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: true, data: null });
    }
  }
);

//  Returns upcoming payment ledger of agents
app.get(
  "/subadmin/all-agent-ledger",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { page, limit } = req.query;
      let lena = await upcomingPay.find({ role: "agent", type: 0 });
      let dena = await upcomingPay.find({ role: "agent", type: 1 });
      const lena_result = await upcomingPay.aggregate([
        { $match: { createdBy: req.user.uid, role: "agent", type: 0 } },
        {
          $group: {
            _id: 1,
            total_open_balance: { $sum: "$open_bal" },
            total_close_balance: { $sum: "$close_bal" },
          },
        },
      ]);
      const dena_result = await upcomingPay.aggregate([
        { $match: { createdBy: req.user.uid, role: "agent", type: 1 } },
        {
          $group: {
            _id: 2,
            total_open_balance: { $sum: "$open_bal" },
            total_close_balance: { $sum: "$close_bal" },
          },
        },
      ]);
      lena = tool.paginatedResult(lena, page, limit);
      dena = tool.paginatedResult(dena, page, limit);
      res.status(200).json({
        status: 200,
        message: "all agent ledger",
        lena_records: lena.length,
        lena_total_opening_balance: lena_result[0].total_open_balance,
        lena_total_closing_balance: lena_result[0].total_close_balance,
        lena_hai: lena,
        dena_records: dena.length,
        dena_total_opening_balance: dena_result[0].total_open_balance,
        dena_total_closing_balance: dena_result[0].total_close_balance,
        dena_hai: dena,
      });
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: true, data: null });
    }
  }
);

//  Returns upcoming payment ledger of master
app.get(
  "/subadmin/all-master-ledger",
  sessionCheck.isAuth,
  upload.none(),
  upload.none(),
  async (req, res) => {
    try {
      const { page, limit } = req.query;
      let lena = await upcomingPay.find({ role: "master", type: 0 });
      let dena = await upcomingPay.find({ role: "master", type: 1 });
      const lena_result = await upcomingPay.aggregate([
        { $match: { createdBy: req.user.uid, role: "master", type: 0 } },
        {
          $group: {
            _id: 1,
            total_open_balance: { $sum: "$open_bal" },
            total_close_balance: { $sum: "$close_bal" },
          },
        },
      ]);
      const dena_result = await upcomingPay.aggregate([
        { $match: { createdBy: req.user.uid, role: "master", type: 1 } },
        {
          $group: {
            _id: 2,
            total_open_balance: { $sum: "$open_bal" },
            total_close_balance: { $sum: "$close_bal" },
          },
        },
      ]);
      lena = tool.paginatedResult(lena, page, limit);
      dena = tool.paginatedResult(dena, page, limit);
      res.status(200).json({
        status: 200,
        message: "all master ledger",
        lena_records: lena.length,
        lena_total_opening_balance: lena_result[0].total_open_balance,
        lena_total_closing_balance: lena_result[0].total_close_balance,
        lena_hai: lena,
        dena_records: dena.length,
        dena_total_opening_balance: dena_result[0].total_open_balance,
        dena_total_closing_balance: dena_result[0].total_close_balance,
        dena_hai: dena,
      });
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: true, data: null });
    }
  }
);

//////////// CASH TRANSACTION//////////////
//  api to insert a transaction record for a client
app.post(
  "/subadmin/client-debit-credit",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid, statement, amount, payment_type, remark } = req.body;
      if (!(uid, amount)) {
        res
          .status(200)
          .json({ status: 200, message: "Insufficient input", success: false });
      } else {
        const user = await User.findOne({ uid, role: "client" });
        if (!user) {
          res
            .status(200)
            .json({ stauts: 200, message: "Invalid UID", success: false });
        } else {
          let data;
          if (payment_type == "DENA") {
            data = await cashLedger.create({
              uid,
              role: user.role,
              statement,
              date: new Date(),
              name: "PAY CASH BY " + amount,
              amount,
              payment_type,
              createdBy: req.user.uid,
              balance: user.wallet + amount,
              remark,
            });
          } else if (payment_type == "LENA") {
            data = await cashLedger.create({
              uid,
              role: user.role,
              date: new Date(),
              statement,
              name: "RECEIVE CASH BY " + amount,
              amount,
              payment_type,
              balance: user.wallet - amount,
              createdBy: req.user.uid,
              remark,
            });
          }
          res.status(201).json({
            status: 201,
            message: "Transaction inserted",
            success: true,
            data: data,
          });
        }
      }
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: true, data: null });
    }
  }
);

//  returns all the cash transaction records of a particular client
app.post(
  "/subadmin/client-debit-credit-get",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid, statement, amount } = req.body;
      if (!(uid, statement)) {
        res
          .status(200)
          .json({ stauts: 200, message: "Insufficient input", success: false });
      } else {
        const user = await User.findOne({ uid: req.body.uid });
        if (!user) {
          res
            .status(200)
            .json({ status: 200, message: "Invalid UID", success: false });
        } else {
          let data;
          if (statement == "ALL") {
            data = await cashLedger.find({
              createdBy: req.user.uid,
              uid,
              role: "client",
            });
          } else {
            data = await cashLedger.find({
              createdBy: req.user.uid,
              uid,
              role: "client",
              statement,
            });
          }
          const balance = await cashLedger.aggregate([
            { $match: { createdBy: req.user.uid, uid: uid, role: "client" } },
            { $group: { _id: 1, total_balance: { $sum: "$balance" } } },
          ]);
          const credit = await cashLedger.aggregate([
            {
              $match: {
                createdBy: req.user.uid,
                uid: uid,
                role: "client",
                payment_type: "DENA",
              },
            },
            { $group: { _id: 2, total_credit: { $sum: "$amount" } } },
          ]);
          const debit = await cashLedger.aggregate([
            {
              $match: {
                createdBy: req.user.uid,
                uid: uid,
                role: "client",
                payment_type: "LENA",
              },
            },
            { $group: { _id: 3, total_debit: { $sum: "$amount" } } },
          ]);
          res.status(200).json({
            status: 200,
            message: "client debit credit records",
            success: true,
            total_balance: balance[0].total_balance,
            total_credit: credit[0].total_credit,
            total_debit: debit[0].total_debit,
            data: data,
          });
        }
      }
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: true, data: null });
    }
  }
);

//  api to insert a transaction record for an agent
app.post(
  "/subadmin/agent-debit-credit",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid, statement, amount, payment_type, remark } = req.body;
      if (!(uid, amount)) {
        res
          .status(200)
          .json({ status: 200, message: "Insufficient input", success: false });
      } else {
        const user = await User.findOne({ uid, role: "agent" });
        if (!user) {
          res
            .status(200)
            .json({ stauts: 200, message: "Invalid UID", success: false });
        } else {
          let data;
          if (payment_type == "DENA") {
            data = await cashLedger.create({
              uid,
              role: user.role,
              statement,
              date: new Date(),
              name: "PAY CASH BY " + amount,
              amount,
              payment_type,
              createdBy: req.user.uid,
              balance: user.wallet + amount,
              remark,
            });
          } else if (payment_type == "LENA") {
            data = await cashLedger.create({
              uid,
              role: user.role,
              date: new Date(),
              statement,
              name: "RECEIVE CASH BY " + amount,
              amount,
              payment_type,
              balance: user.wallet - amount,
              createdBy: req.user.uid,
              remark,
            });
          }
          res.status(201).json({
            status: 201,
            message: "Transaction inserted",
            success: true,
            data: data,
          });
        }
      }
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: true, data: null });
    }
  }
);

//  returns all the cash transaction records of a particular agent
app.post(
  "/subadmin/agent-debit-credit-get",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid, statement, amount } = req.body;
      if (!(uid, statement)) {
        res
          .status(200)
          .json({ stauts: 200, message: "Insufficient input", success: false });
      } else {
        const user = await User.findOne({ uid });
        if (!user) {
          res
            .status(200)
            .json({ status: 200, message: "Invalid UID", success: false });
        } else {
          let data;
          if (statement == "ALL") {
            data = await cashLedger.find({
              createdBy: req.user.uid,
              uid,
              role: "agent",
            });
          } else {
            data = await cashLedger.find({
              createdBy: req.user.uid,
              uid,
              role: "agent",
              statement,
            });
          }
          const balance = await cashLedger.aggregate([
            { $match: { createdBy: req.user.uid, uid: uid, role: "agent" } },
            { $group: { _id: 1, total_balance: { $sum: "$balance" } } },
          ]);
          const credit = await cashLedger.aggregate([
            {
              $match: {
                createdBy: req.user.uid,
                uid: uid,
                role: "agent",
                payment_type: "DENA",
              },
            },
            { $group: { _id: 2, total_credit: { $sum: "$amount" } } },
          ]);
          const debit = await cashLedger.aggregate([
            {
              $match: {
                createdBy: req.user.uid,
                uid: uid,
                role: "agent",
                payment_type: "LENA",
              },
            },
            { $group: { _id: 3, total_debit: { $sum: "$amount" } } },
          ]);
          res.status(200).json({
            status: 200,
            message: "agent debit credit records",
            success: true,
            total_balance: balance[0].total_balance,
            total_credit: credit[0].total_credit,
            total_debit: debit[0].total_debit,
            data: data,
          });
        }
      }
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: true, data: null });
    }
  }
);

//  api to insert a transaction record for a superagent
app.post(
  "/subadmin/superagent-debit-credit",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid, statement, amount, payment_type, remark } = req.body;
      if (!(uid, amount)) {
        res
          .status(200)
          .json({ status: 200, message: "Insufficient input", success: false });
      } else {
        const user = await User.findOne({ uid, role: "superagent" });
        if (!user) {
          res
            .status(200)
            .json({ stauts: 200, message: "Invalid UID", success: false });
        } else {
          let data;
          if (payment_type == "DENA") {
            data = await cashLedger.create({
              uid,
              role: user.role,
              statement,
              date: new Date(),
              name: "PAY CASH BY " + amount,
              amount,
              payment_type,
              createdBy: req.user.uid,
              balance: user.wallet + amount,
              remark,
            });
          } else if (payment_type == "LENA") {
            data = await cashLedger.create({
              uid,
              role: user.role,
              date: new Date(),
              statement,
              name: "RECEIVE CASH BY " + amount,
              amount,
              payment_type,
              balance: user.wallet - amount,
              createdBy: req.user.uid,
              remark,
            });
          }
          res.status(201).json({
            status: 201,
            message: "Transaction inserted",
            success: true,
            data: data,
          });
        }
      }
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: true, data: null });
    }
  }
);

//  returns all the cash transaction records of a particular superagent
app.post(
  "/subadmin/superagent-debit-credit-get",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid, statement, amount } = req.body;
      if (!(uid, statement)) {
        res
          .status(200)
          .json({ stauts: 200, message: "Insufficient input", success: false });
      } else {
        const user = await User.findOne({ uid });
        if (!user) {
          res
            .status(200)
            .json({ status: 200, message: "Invalid UID", success: false });
        } else {
          let data;
          if (statement == "ALL") {
            data = await cashLedger.find({
              createdBy: req.user.uid,
              uid,
              role: "superagent",
            });
          } else {
            data = await cashLedger.find({
              createdBy: req.user.uid,
              uid,
              role: "superagent",
              statement,
            });
          }
          const balance = await cashLedger.aggregate([
            {
              $match: { createdBy: req.user.uid, uid: uid, role: "superagent" },
            },
            { $group: { _id: 1, total_balance: { $sum: "$balance" } } },
          ]);
          const credit = await cashLedger.aggregate([
            {
              $match: {
                createdBy: req.user.uid,
                uid: uid,
                role: "superagent",
                payment_type: "DENA",
              },
            },
            { $group: { _id: 2, total_credit: { $sum: "$amount" } } },
          ]);
          const debit = await cashLedger.aggregate([
            {
              $match: {
                createdBy: req.user.uid,
                uid: uid,
                role: "superagent",
                payment_type: "LENA",
              },
            },
            { $group: { _id: 3, total_debit: { $sum: "$amount" } } },
          ]);
          res.status(200).json({
            status: 200,
            message: "agent debit credit records",
            success: true,
            total_balance: balance[0].total_balance,
            total_credit: credit[0].total_credit,
            total_debit: debit[0].total_debit,
            data: data,
          });
        }
      }
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: true, data: null });
    }
  }
);

//  api to insert a transaction record for a master
app.post(
  "/subadmin/master-debit-credit",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid, statement, amount, payment_type, remark } = req.body;
      if (!(uid, amount)) {
        res
          .status(200)
          .json({ status: 200, message: "Insufficient input", success: false });
      } else {
        const user = await User.findOne({ uid, role: "master" });
        if (!user) {
          res
            .status(200)
            .json({ stauts: 200, message: "Invalid UID", success: false });
        } else {
          let data;
          if (payment_type == "DENA") {
            data = await cashLedger.create({
              uid,
              role: user.role,
              statement,
              date: new Date(),
              name: "PAY CASH BY " + amount,
              amount,
              payment_type,
              createdBy: req.user.uid,
              balance: user.wallet + amount,
              remark,
            });
          } else if (payment_type == "LENA") {
            data = await cashLedger.create({
              uid,
              role: user.role,
              date: new Date(),
              statement,
              name: "RECEIVE CASH BY " + amount,
              amount,
              payment_type,
              balance: user.wallet - amount,
              createdBy: req.user.uid,
              remark,
            });
          }
          res.status(201).json({
            status: 201,
            message: "Transaction inserted",
            success: true,
            data: data,
          });
        }
      }
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: true, data: null });
    }
  }
);

//  returns all the cash transaction records of a particular master
app.post(
  "/subadmin/master-debit-credit-get",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { uid, statement, amount } = req.body;
      if (!(uid, statement)) {
        res
          .status(200)
          .json({ stauts: 200, message: "Insufficient input", success: false });
      } else {
        const user = await User.findOne({ uid });
        if (!user) {
          res
            .status(200)
            .json({ status: 200, message: "Invalid UID", success: false });
        } else {
          let data;
          if (statement == "ALL") {
            data = await cashLedger.find({
              createdBy: req.user.uid,
              uid: uid,
              role: "master",
            });
          } else {
            data = await cashLedger.find({
              createdBy: req.user.uid,
              uid: uid,
              role: "master",
              statement,
            });
          }
          const balance = await cashLedger.aggregate([
            { $match: { createdBy: req.user.uid, uid: uid, role: "master" } },
            { $group: { _id: 1, total_balance: { $sum: "$balance" } } },
          ]);
          const credit = await cashLedger.aggregate([
            {
              $match: {
                createdBy: req.user.uid,
                uid: uid,
                role: "master",
                payment_type: "DENA",
              },
            },
            { $group: { _id: 2, total_credit: { $sum: "$amount" } } },
          ]);
          const debit = await cashLedger.aggregate([
            {
              $match: {
                createdBy: req.user.uid,
                uid: uid,
                role: "master",
                payment_type: "LENA",
              },
            },
            { $group: { _id: 3, total_debit: { $sum: "$amount" } } },
          ]);
          res.status(200).json({
            status: 200,
            message: "agent debit credit records",
            success: true,
            total_balance: balance[0].total_balance,
            total_credit: credit[0].total_credit,
            total_debit: debit[0].total_debit,
            data: data,
          });
        }
      }
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: true, data: null });
    }
  }
);

// //////////LOGIN REPORT////////////
// return the login reports of all clients created by the current subadmin
app.post(
  "/subadmin/client-login-report",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { page, limit } = req.query;
      const { uid, from, to } = req.body;
      if (!uid) {
        res
          .status(200)
          .json({ status: 200, message: "Insufficient input", success: false });
      }
      const user = await User.findOne({
        uid,
        role: "client",
        createdBy: req.user.uid,
      });
      if (!user) {
        res
          .status(200)
          .json({ status: 200, message: "User not found", success: false });
      } else {
        const report = await Login.find({ uid });
        if (report.length < 1) {
          res
            .status(200)
            .json({ status: 200, message: "No login reports", success: false });
        } else {
          const pagedata = tool.paginatedResult(report, page, limit);
          res.status(200).json({
            status: 200,
            message: "Login reports",
            success: true,
            data: pagedata,
          });
        }
      }
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: true, data: null });
    }
  }
);

// return the login reports of all superagents created by the current subadmin
app.post(
  "/subadmin/superagent-login-report",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { page, limit } = req.query;
      const { uid, from, to } = req.body;
      if (!uid) {
        res
          .status(200)
          .json({ status: 200, message: "Insufficient input", success: false });
      }
      const user = await User.findOne({
        uid,
        role: "superagent",
        createdBy: req.user.uid,
      });
      if (!user) {
        res
          .status(200)
          .json({ status: 200, message: "User not found", success: false });
      } else {
        const report = await Login.find({ uid });
        if (report.length < 1) {
          res
            .status(200)
            .json({ status: 200, message: "No login reports", success: false });
        } else {
          const pagedata = tool.paginatedResult(report, page, limit);
          res.status(200).json({
            status: 200,
            message: "Login reports",
            success: true,
            data: pagedata,
          });
        }
      }
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: true, data: null });
    }
  }
);

// return the login reports of all agents created by the current subadmin
app.post(
  "/subadmin/agent-login-report",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { page, limit } = req.query;
      const { uid, from, to } = req.body;
      if (!uid) {
        res
          .status(200)
          .json({ status: 200, message: "Insufficient input", success: false });
      }
      const user = await User.findOne({
        uid,
        role: "agent",
        createdBy: req.user.uid,
      });
      if (!user) {
        res
          .status(200)
          .json({ status: 200, message: "User not found", success: false });
      } else {
        const report = await Login.find({ uid });
        if (report.length < 1) {
          res
            .status(200)
            .json({ status: 200, message: "No login reports", success: false });
        } else {
          const pagedata = tool.paginatedResult(report, page, limit);
          res.status(200).json({
            status: 200,
            message: "Login reports",
            success: true,
            data: pagedata,
          });
        }
      }
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: true, data: null });
    }
  }
);

// return the login reports of all masters created by the current subadmin
app.post(
  "/subadmin/master-login-report",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    try {
      const { page, limit } = req.query;
      const { uid, from, to } = req.body;
      if (!uid) {
        res
          .status(200)
          .json({ status: 200, message: "Insufficient input", success: false });
      }
      const user = await User.findOne({
        uid,
        role: "master",
        createdBy: req.user.uid,
      });
      if (!user) {
        res
          .status(200)
          .json({ status: 200, message: "User not found", success: false });
      } else {
        const report = await Login.find({ uid });
        if (report.length < 1) {
          res
            .status(200)
            .json({ status: 200, message: "No login reports", success: false });
        } else {
          const pagedata = tool.paginatedResult(report, page, limit);
          res.status(200).json({
            status: 200,
            message: "Login reports",
            success: true,
            data: pagedata,
          });
        }
      }
    } catch (err) {
      console.log(err);
      // res.status(500).json({ status: 500, message: "Internal server error", success: true, data: null });
    }
  }
);

// /////////AGENT///////////////////
app.get("/agent", sessionCheck.isAgent, (req, res) => {
  try {
    var user = "AGENT LOGGED-IN";
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

// /////////SUPER-AGENT///////////////////
app.get("/superagent", sessionCheck.isSuperagent, (req, res) => {
  try {
    var user = "SUPER_AGENT LOGGED-IN";
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

// /////////MASTER///////////////////
app.get("/master", sessionCheck.isMaster, (req, res) => {
  try {
    var user = "MASTER LOGGED-IN";
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

// ///////USER/////////
app.get("/user", sessionCheck.isAuth, (req, res) => {
  try {
    var user = "USER LOGGED-IN";
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

// ///////ADMIN/////////
app.get("/admins", sessionCheck.isAdmin, (req, res) => {
  try {
    console.log("------------->");
    var admin = "ADMIN LOGGED-IN";
    res.status(200).json(admin);
  } catch (err) {
    res.status(400).json(err);
  }
});

// ///////HOME////////////
app.get("/home", sessionCheck.isAuth, async (req, res) => {
  try {
    const data = await matches.find().exec();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

// ///////SINGLE MATCH///////////
app.post("/singlematch", sessionCheck.isAuth, async (req, res) => {
  try {
    const { match_id } = req.body;
    if (!match_id) {
      return res.status(400).send("All input is required");
    }
    const data = await matches.findOne({ _id: match_id }).exec();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.get("/session", sessionCheck.isAuth, async (req, res) => {
  res.render("user/session");
});

app.get("/yourbet", sessionCheck.isAuth, (req, res) => {
  res.render("user/yourbet");
});

// ////LOGOUT//////
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/index");
});

//Get user Profile
app.get("/user-profile", sessionCheck.isAuth, async (req, res) => {
  const userId = req.user.uid;

  const results = await User.findOne({ uid: userId });

  if (!results) {
    return res.status(200).json({
      status: 200,
      message: "No User found.",
      success: false,
      data: null,
    });
  }

  return res.status(200).json({
    status: 200,
    message: "User Profile",
    success: true,
    data: results,
  });
});

//get user profile by userId
app.post(
  "/user-profile-byId",
  sessionCheck.isAuth,
  upload.none(),
  async (req, res) => {
    const { userId } = req.body;

    const results = await User.findOne({ uid: userId });

    if (!results) {
      return res.status(200).json({
        status: 200,
        message: "No User found.",
        success: false,
        data: null,
      });
    }

    return res.status(200).json({
      status: 200,
      message: "User Profile",
      success: true,
      data: results,
    });
  }
);



module.exports = app;

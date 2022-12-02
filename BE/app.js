var createError = require("http-errors");
require("dotenv").config();
var express = require("express");
var path = require("path");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
var Tool = require("./tools");
Tool.db_connect();
var usersRouter = require("./controllers/users");
var adminRouter = require("./controllers/admin");
var ownersRouter = require("./controllers/owners");
var clientsRouter = require("./controllers/clients");

var app = express();
var sessionVar;
app.set("views", path.join(__dirname, "public/build"));
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(express.static(path.join(__dirname, "public/build")));
app.set("public", path.join(__dirname, "public/build"));

const oneDay = 1000 * 60 * 60 * 24;
app.use(
  session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir777",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

app.use("/admin", function (req, res, next) {
  sessionVar = req.session;
  if (sessionVar.userdetail.role != "Super Admin") {
    res.redirect("/admin-login/");
  } else {
    next();
  }
});

app.use("/", usersRouter);
app.use("/admin-login", adminRouter);
app.use("/admins", adminRouter);
app.use("/owner", ownersRouter);
app.use("/game", clientsRouter);

app.use(function (req, res, next) {
  res.sendFile(__dirname + "/public/build/index.html");
  // next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 200);
  res.send(err.message);
  //    res.render("error", { error: err });
});

app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/public/build/index.html");
});
app.use("*", function (req, res) {
  res.sendFile(__dirname + "/public/build/index.html");
});

module.exports = app;

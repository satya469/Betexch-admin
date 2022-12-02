const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uid: { type: String, default: null },
  name: { type: String },
  // last_name: { type: String },
  status: { type: String, default: "Active" },
  contact_no: { type: String, default: null },
  role: { type: String, default: "user" },
  // email: { type: String, unique: true },
  password: { type: String },
  members: {},
  createdBy: { type: String },
  reference: { type: String, default: "self" },
  token: { type: String },
  wallet: { type: Number, default: 0 },
  limit: { type: Number, default: "0" },
  share: { type: Number, default: "0" },
  cassinoShare: { type: Number, default: "0" },
  cassinoCommission: { type: Number, default: "0" },
  cassinoStatus: { type: Number, default: "0" },
  commissionType: { type: String },
  matchCommission: { type: Number, default: "0" },
  sessionCommission: { type: Number, default: "0" },
});
userSchema.set("timestamps", true);
module.exports = mongoose.model("user", userSchema);

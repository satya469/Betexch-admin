const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
   id:{
       type: String,
       required: true
   },
   name:{
       type: String,
       require: true
   },
   date_time:{
       type: Date,
       required:true
   },
   match_type:{
       type: String,
       required:true
   },
   declare:{
       type: String,
       required: true
   },
   won_by:{
       type: String,
       required: true
   },
//   plus_minus:{
//       type: Number,
//       required: true
//   },
});

recordSchema.set('timestamp','true');
module.exports = mongoose.model('mrecord',recordSchema);
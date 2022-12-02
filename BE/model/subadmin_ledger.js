const mongoose = require("mongoose");

const subledgerSchema = new mongoose.Schema({
   id:{
       type: String,
       required: true,
       unique:true
   },
   subadmin_uid:{type:String, required:true},
   date:{type:String},
   collection_name:{type:String},
   debit:{type:Number,default:0},
   credit:{type:Number,default:0},
   balance:{type:Number,default:0},
   payment_type:{type:String},
   remark:{type:String}
//   client_uid:{},
//   total_credit:{type: String,default:0},
//   total_debt:{type: Number,default:0},
//   balance:{type: Number,default:0}
});

subledgerSchema.set('timestamp','true');
module.exports = mongoose.model('subadminledger',subledgerSchema);
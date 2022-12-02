const mongoose = require("mongoose");

const userledgerSchema = new mongoose.Schema({
   uid:{type:String, required:true},
   role:{type:String,required:true},
   name:{type:String},
   collection_name:{type:String},
   createdBy:{type:String,required:true},
   statement:{type:String,enum:['ALL','MATCH','CASINO','CASH'],default:'ALL'},
   date:{type:String},
   balance:{type:Number},
   amount:{type: Number,default:0},
   payment_type:{type:String,enum:['DENA','LENA'],default:'DENA'},
   remark:{type:String,default:null},
});

userledgerSchema.set('timestamp','true');
module.exports = mongoose.model('cashledger',userledgerSchema);
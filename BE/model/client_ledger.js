const mongoose = require("mongoose");

const ledgerSchema = new mongoose.Schema({
   id:{type: String,required: true,unique:true},
   client_uid:{type:String, required:true},
   date:{type:String},
   remark:{type:String},
   won_by:{type:String},
   won:{type:Number,default:0},
   lost:{type:Number,default:0},
});

ledgerSchema.set('timestamp','true');
module.exports = mongoose.model('ledger',ledgerSchema);
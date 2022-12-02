const mongoose = require("mongoose");

const plusminusSchema = new mongoose.Schema({
    id:{type:Number,default:0},
    uid:{type:String,required:true},
   market_id:{type:Number,required:true},
   match_name:{type:String,required:true},
   date:{type:Date,default: new Date()},
   match_amount:{type:Number,default:0},
   session_amount:{type:Number,default:0},
   total:{type:Number,default:0},
   balance:{type:Number,default:0},
});

plusminusSchema.set('timestamps',true);
module.exports = mongoose.model("plusminus",plusminusSchema);
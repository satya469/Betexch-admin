const mongoose = require("mongoose");

const upSchema = new mongoose.Schema({
    uid:{type:String,required:true},
   name:{type:String,required:true},
   role:{type:String,required:true},
   date:{type: Date,required:true},
   createdBy:{type:String,required:true},
   contact_no:{type:Number,default:null},
   open_bal:{type:Number,default:0},
   current_bal:{type:Number,default:0.00},
   close_bal:{type:Number,default:0},
   type:{type:Number,enum:[0,1],required:true}
//   if type is '0' - payment lena hai
//   if type is '1' - payment dena hai
});

upSchema.set('timestamp','true');
module.exports = mongoose.model('upcomings',upSchema);
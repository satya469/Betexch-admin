const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    uid:{
        type:String,
        required:true
    },
    ip:{
     type:String,
     required:true
    },
    date_time:{
        type:Date,
        required:true
    }
});

loginSchema.set('timestamp','true');
module.exports = mongoose.model('login',loginSchema);
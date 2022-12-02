const mongoose = require("mongoose");

const sessionbetSchema = new mongoose.Schema({
    sno:{type:Number},
    id:{type:Number, unique:true},
    market_id:{type:Number},
    declare:{type:Number,default:0},
    manual_id:{type:Number},
    name: {type:String, default:null},
    no_run:{},
    yes_range:{},
    state:{type:Boolean,default:0},
    type:{type:String},
    status:{type:String, default:'pending'},
    decision_run:{type:Number, default:null}
});

sessionbetSchema.set('timestamps', true);
module.exports = mongoose.model("sessions", sessionbetSchema); 
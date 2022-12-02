const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
    id:{type:Number, unique:true},
    username: {type:String, unique:true, required:true},
    first_name: { type: String, required:true },
    last_name: { type: String, required:true },
    status:{type:String, default:'active'},
    contact_no:{type:String, default:null},
    role: { type: String, default: "owner" },
    email: { type: String,required:true, unique: true },
    password: { type: String },
    token: { type: String },
});
ownerSchema.set('timestamps', true);
module.exports = mongoose.model("owner", ownerSchema);
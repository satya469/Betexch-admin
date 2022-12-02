const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({                                       
    id: {
        type: String,
        required: true
    },
    market_id: {
        type: String,
        required: true
    },
    // team1:  {
    //     type: String,
    //     required: true
    // },
    // team2: {
    //     type: String,
    //     required: true
    // },
    lagai_top: {
        type: Number,
        default:0
    },
    lagai_top_switch:{
        type:Boolean,
        default:0
    },
    khaai_top: {
        type: Number,
        default:0
    },
    khaai_top_switch:{
        type:Boolean,
        default:0
    },
    lagai_bottom: {
        type: Number,
        default:0
    },
    lagai_bottom_switch:{
        type:Boolean,
        default:0
    },
    khaai_bottom: {
        type: Number,
        default:0
    },
    khaai_bottom_switch:{
        type:Boolean,
        default:0
    },
    match_range:{},
    status:{type:Boolean}
    // insert_type: {
    //     type: String,
    //     required: true
    // },
    // match_amount: {
    //     type: String,
    //     required: true
    // },
});
matchSchema.set('timestamps', true);
module.exports = mongoose.model('mbhav',matchSchema);
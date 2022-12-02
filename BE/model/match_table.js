const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  match_id: { type: String, required: true,},
  market_id: { type: String },
  game_id: {type: String,required: true, unique: true},
  match_name: { type: String, required: true },
  first_team_name: { type: String, required: true },
  second_team_name: { type: String, required: true },
  match_datetime: { type: String },
  status: { type: String },
});
matchSchema.set('timestamps', true);
module.exports = mongoose.model('match_table', matchSchema);
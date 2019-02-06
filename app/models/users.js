var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var users = new Schema({
  email: { type: String, unique: true },
  password: { type: String },
  user_type: { type: String, required: true },
  first_name: { type: String },
  last_name: { type: String },
  phone_num: { type: String },
  created_at: { type: Date },
  survery_answer: { type: Boolean, default: false },
  survey_results: [Number]
});

var userData = mongoose.model("users", usersDataSchema);
module.exports = userData;

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var usersDataSchema = new Schema({
    email: { type: String, unique: true },
    password: { type: String },
    user_type: { type: String, required: true },
    first_name: { type: String },
    last_name: { type: String },
    phone_num: { type: String },
    created_at: { type: Date }

});

var userData = mongoose.model("users", usersDataSchema);
module.exports = userData;
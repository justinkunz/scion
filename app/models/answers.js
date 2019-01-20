var mongoose = require('mongoose')
var Schema = mongoose.Schema

var AnswerSchema = new Schema({
    answer1: String,
    answer2: String,
    answer3: String,
    answer4: String,
    answer5: String
});
var Answers = mongoose.model("Answer", AnswerSchema)
module.exports = Answers

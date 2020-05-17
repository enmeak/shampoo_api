var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  user_name: String,
  password: String,
  team: String,
  exams: [
    {
      exam_name: String,
      answers: [
        {
          id_question: String,
          id_answer: String
        }
      ],
      score: Number
    }
  ]
});

module.exports = mongoose.model('Users', UserSchema);
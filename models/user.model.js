var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  user_name: {
    type: String,
    required: "please provide a user name"
  },
  password: {
    type: String,
    required: "please provide a password"
  },
  team: {
    type: String,
    required: "please provide a team"
  }
});

module.exports = mongoose.model('Users', UserSchema);
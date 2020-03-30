var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String
  },
  password: {
    type: String
  },
  team: {
    type: String
  }
});

module.exports = mongoose.model('Users', UserSchema);
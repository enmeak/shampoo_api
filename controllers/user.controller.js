var mongoose = require("mongoose"),
  User = mongoose.model("Users");

// get a users list function
exports.get_user_list = function(req, res) {
  User.find({}, function(err, users) {
    if (err) res.send(err);
    else {
      res.send(users);
    }
  });
};

// create a user function
exports.create_a_user = function(req, res) {
  const user_name = req.params.user_name;
  const password = req.params.password;
  const team = req.params.team;
  console.log(user_name, password, team);
  var new_user = new User({
    user_name: user_name,
    password: password,
    team: team
  });
  new_user.save(function(err, task) {
    if (err) res.send(err);
    else res.send("user created");
  });
};

// authenticate user functions
exports.authenticate_user = function(req, res) {
  User.exists({ user_name: req.params.user_name }, function(err, result) {
    if (result) {
      User.findOne({ user_name: req.params.user_name }, function(err, user) {
        if (err) res.send(false);
        if (user.password == req.params.password) {
          res.send(true);
        } else res.send(false);
      });
    } else res.send(false);
  });
};

// check if user exists function
function user_exists(user_name) {
  User.exists({ user_name: user_name }, function(err, result) {
    if (result == true) {
      console.log("yay");
      return "true";
    } else {
      console.log("nay");
      return "false";
    }
  });
}

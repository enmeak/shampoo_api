var mongoose = require("mongoose"),
  User = mongoose.model("Users");

// exports.list_all_users = function(req, res) {
//     User.find({}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };

exports.get_user_list = function(req, res) {
  User.find({}, function(err, users) {
    if (err) res.send(err);
    else {
      res.send(users);
    }
  });
};

exports.create_a_user = function(req, res) {
  const user_name = req.params.user_name;
  const password = req.params.password;
  const team = req.params.team;
  console.log(user_name, password, team)
  var new_user = new User({"user_name" : user_name, "password" : password, "team" : team});
  new_user.save(function(err, task) {
    if (err) res.send(err);
    else res.send("user created")
  });
};

exports.authenticate_user = function(req, res) {
  User.exists({"user_name" : req.params.user_name}, function (err, result) {
    if (result) {
      User.findOne({ "user_name" : req.params.user_name }, function(err, user) {
        if (err) res.send(false);
        if (user.password == req.params.password) {
          res.send(true);
        }
        else res.send(false);
      });
    } else res.send(false);
  })
};

function user_exists(user_name) {
  User.exists({"user_name" : user_name}, function (err, result) {
    if (result == true) {
      console.log("yay")
      return 'true'
    } else {
      console.log("nay")
      return 'false'
    }
  })
}
// exports.update_a_task = function(req, res) {
//   Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };

// exports.delete_a_task = function(req, res) {

//   Task.remove({
//     _id: req.params.taskId
//   }, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Task successfully deleted' });
//   });
// };

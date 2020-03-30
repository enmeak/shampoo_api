
var mongoose = require('mongoose'),
  User = mongoose.model('Users');

// exports.list_all_users = function(req, res) {
//     User.find({}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };




exports.create_a_user = function(req, res) {
    const name = req.params.name;
    const password = req.params.password;
    const team = req.params.team;
    var new_user = new User(name, password, team);
    new_user.save(function(err, task) {
        if (err)
        res.send(err);
        res.json(task);
    });
};


exports.authenticate_user = function(req, res) {
  User.find({"name" : req.params.name}, function(err, user) {
    if (err)
      res.send(err);
    if (user.password == req.params.password) {
        res.send({"authentication": true});
    } else {
        res.send({"authentication": false});
    }
  });
};


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

var mongoose = require("mongoose"),
  Exam = mongoose.model("Exams");

// function that return exam by id

// function to return all exam names under each team

// function to save exam in db
exports.add_exam = function(req, res) {
    let new_exam = new Exam(req.body);
    console.log(new_exam);
    
    new_exam.save(function(err, task) {
      if (err) res.send(err);
      else res.send("exam created");
    });
  };
  
  exports.get_all_exams = function(req, res) {
    Exam.find({}, function(err, users) {
      if (err) res.send(err);
      else {
        res.send(users);
      }
    });
  };

  // function to delete exam
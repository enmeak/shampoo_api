var mongoose = require("mongoose"),
  Exam = mongoose.model("Exams");

// function that return exam by id
exports.get_exam_by_id = function (req, res) {
  Exam.findOne({ _id: req.params.exam_id }, function (err, exam) {
    if (err) res.send(err);
    else {
      res.send(exam);
    }
  });
};
// function to return all exam names under each team

// function to save exam in db
exports.add_exam = function (req, res) {
  let new_exam = new Exam(req.body);
  console.log(new_exam);

  new_exam.save(function (err, task) {
    if (err) res.send(err);
    else res.send("exam created");
  });
};

exports.get_all_exams = function (req, res) {
  Exam.find({}, function (err, exams) {
    if (err) res.send(err);
    else {
      res.send(exams);
    }
  });
};

// function to delete exam

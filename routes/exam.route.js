module.exports = function (app) {
  var examFunctions = require("../controllers/exam.controller.js");

  // save exam route
  app.route("/exams/add_exam").post(examFunctions.add_exam);

  // get the full colletion of exams
  app.route("/exams/").get(examFunctions.get_all_exams);

  // get a specific exam by id
  app.route("/exams/:exam_id").get(examFunctions.get_exam_by_id);
};

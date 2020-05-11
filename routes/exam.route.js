module.exports = function(app) {
    var examFunctions = require("../controllers/exam.controller.js");
  
    // save exam route
    app
      .route("/exams/add_exam")
      .post(examFunctions.add_exam);
    app
      .route("/exams/")
      .get(examFunctions.get_all_exams);
  
  };
  
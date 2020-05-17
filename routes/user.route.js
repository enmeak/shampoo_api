module.exports = function(app) {
  var userFunctions = require("../controllers/user.controller.js");

  // sign in route
  app
    .route("/users/signIn/:user_name/:password")
    .get(userFunctions.authenticate_user);

  // sign up route
  app
    .route("/users/signUp/:user_name/:password/:team")
    .get(userFunctions.create_a_user);

  // users list route
  app.route("/users/").get(userFunctions.get_user_list);

  // save finished exam under user
  app.route("/users/:user_name/:exam_name/save_exam_result").post(userFunctions.save_exam_results)
};

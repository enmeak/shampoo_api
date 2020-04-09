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
};

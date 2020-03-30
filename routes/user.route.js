module.exports = function(app) {
  var userFunctions = require('../controllers/user.controller.js');

  // todoList Routes
  app.route('/users/signIn/:name/:password')
    .get(userFunctions.authenticate_user);


  app.route('/users/signUp/:name/:password/:team')
    .post(userFunctions.create_a_user)
};
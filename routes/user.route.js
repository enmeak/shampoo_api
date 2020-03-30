module.exports = function(app) {
  var userFunctions = require('../controllers/user.controller.js');

  // todoList Routes
  app.route('/users/signIn/:user_name/:password')
    .get(userFunctions.authenticate_user);


  app.route('/users/signUp/:user_name/:password/:team')
    .get(userFunctions.create_a_user)

  
  app.route('/users/')
    .get(userFunctions.get_user_list)
    

  app.route('/users/:user_name')
    .get(userFunctions.user_exists)
};


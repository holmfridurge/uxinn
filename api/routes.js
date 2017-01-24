var user = require('./Models/users');
 
module.exports = {
  configure: function(app) {
    // todo_list table
    app.get('/user/', function(req, res) {
      user.get(res);
    });

    app.post('/todo/', function(req, res) {
      user.create(req.body, res);
    });
 
    app.put('/todo/', function(req, res) {
      user.update(req.body, res);
    });
 
    app.delete('/todo/:id/', function(req, res) {
      user.delete(req.params.id, res);
    });

  }
};
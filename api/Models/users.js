var connection = require('../connection');

// READY BUT NEEDS TO TEST BETTER

function User() {
  
  // Helper function - creates the update sql query
  var createUpdateSQL = function(table, data) {
    try {
        var values = "";
        var length = Object.keys(data).length;
        var count = 0;
        for(d in data) {
          count += 1;
          if(count == length) {
            if(data[d] == null) {
              values += "" + d + " = " + data[d] + " ";
            } else {
              values += "" + d + " = '" + data[d] + "' ";            
            } 
          } else {
            if(data[d] == null) {
              values += "" + d + " = " + data[d] + ", ";
            } else {
              values += "" + d + " = '" + data[d] + "', ";
            }
          }
        }
      } catch(e) {}

      return sqlQuery = "update " + table + " set " + values + "where ID = " + data.ID;
  }

  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from users', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.getUserByID = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('select * from users where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 404, message: 'Failed to get user by id'});
        } else {
          res.send(result);
        }
      });
    });
  };

  this.getUserByToken = function(token, res) {
    connection.acquire(function(err, con) {
      con.query('select * from users where token = ?', [token], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 404, message: 'Failed to get user by token'});
        } else {
          res.send(result);
        }
      });
    });
  };

  this.create = function(user, res) {
    connection.acquire(function(err, con) {
      con.query('insert into users set ?', user, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 412, message: 'User creation failed'});
        } else {
          res.send({status: 200, message: 'User created successfully'});
        }
      });
    });
  };


  this.update = function(user, res) {
    connection.acquire(function(err, con) {
      
      var sqlQuery = createUpdateSQL("users", user);

      con.query(sqlQuery, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 412, message: 'User update failed'});
        } else {
          res.send({status: 200, message: 'User updated successfully'});
        }
      });
    });
  };

  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from users where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 404, message: 'Failed to delete'});
        } else {
          res.send({status: 200, message: 'Deleted successfully'});
        }
      });
    });
  };

  
}
module.exports = new User();
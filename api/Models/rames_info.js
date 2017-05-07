var connection = require('../connection');

// READY BUT NEEDS TO TEST BETTER

function RamesInfo() {

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

  // Get all rames information
  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from rames_info', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  // Get all rames information by id
  this.getRamesInfoByID = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('select * from rames_info where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 404, message: 'Failed to get the rames information by id'});
        } else {
          res.send(result);
        }
      });
    });
  };

  // Get all rames information by category id
  this.getRamesInfoByCategoryID = function(categoryID, res) {
    connection.acquire(function(err, con) {
      con.query('select * from rames_info where categoryID = ?', [categoryID], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 404, message: 'Failed to get the rames information by category id'});
        } else {
          res.send(result);
        }
      });
    });
  };

  // Get all rames information by languageID
  this.getRamesInfoByLanguageID = function(languageID, res) {
    connection.acquire(function(err, con) {
      con.query('select * from rames_info where languageID = ?', [languageID], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 404, message: 'Failed to get the rames information by language id'});
        } else {
          res.send(result);
        }
      });
    });
  };

  // Add rames information
  this.create = function(info, res) {
    connection.acquire(function(err, con) {
      con.query('insert into rames_info set ?', info, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 412, message: 'Rames information creation failed'});
        } else {
          res.send({status: 200, message: 'Rames information created successfully'});
        }
      });
    });
  };

  // Update specific rames information
  this.update = function(info, res) {
    connection.acquire(function(err, con) {
      var sqlQuery = createUpdateSQL("rames_info", info);

      con.query(sqlQuery, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 412, message: 'Rames information update failed'});
        } else {
          res.send({status: 200, message: 'Rames information updated successfully'});
        }
      });
    });
  };

  // Delete the rames information with the given id
  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from rames_info where id = ?', [id], function(err, result) {
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
module.exports = new RamesInfo();
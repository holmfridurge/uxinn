var connection = require('../connection');

// READY BUT NEEDS TO TEST BETTER

function ReportsCategory() {

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

  // Get all rames category
  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from rames_category', function(err, result) {
        con.release();
        if (err) {
          res.send({status: 404, message: 'Failed to get the rames categories'});
        } else {
          res.send(result);
        }
      });
    });
  };

  this.getOrderedCategory = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from rames_category order by sequenceNumber ASC', function(err, result) {
        con.release();
        if (err) {
          res.send({status: 404, message: 'Failed to get the rames category by sequence number'});
        } else {
          res.send(result);
        }
      });
    });
  };

  // Get a rames category by id
  this.getRamesCategoryByID = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('select * from rames_category where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 404, message: 'Failed to get the rames category by id'});
        } else {
          res.send(result);
        }
      });
    });
  };

  // Get a all rames categories by language id
  this.getAllRamesCategoryByLanguageID = function(languageID, res) {
    connection.acquire(function(err, con) {
      con.query('select * from rames_category where languageid = ?', [languageID], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 404, message: 'Failed to get the rames category by language id'});
        } else {
          res.send(result);
        }
      });
    });
  };

  this.getRamesCategoryByLanguageID = function(data, req) {
      connection.acquire(function(err, con) {
          con.query('select * from rames_category where id = ? and languageid = ?', [data.id, data.languageID], function(err, result) {
            con.release();
            if (err) {
            res.send({status: 404, message: 'Failed to get the rames category by category id and language id'});
            } else {
            res.send(result);
            }
          });
      });
  };

  // Add report information
  this.create = function(data, res) {
    connection.acquire(function(err, con) {
      con.query('insert into rames_category set ?', data, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 412, message: 'Rames category creation failed'});
        } else {
          res.send({status: 200, message: 'Rames category created successfully'});
        }
      });
    });
  };

  // Update specific report information
  this.update = function(data, res) {
    connection.acquire(function(err, con) {
      var sqlQuery = createUpdateSQL("rames_category", data);

      con.query(sqlQuery, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 412, message: 'Rames category update failed'});
        } else {
          res.send({status: 200, message: 'Rames category updated successfully'});
        }
      });
    });
  };

  // Delete the reports information with the given id
  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from rames_category where id = ?', [id], function(err, result) {
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
module.exports = new ReportsCategory();
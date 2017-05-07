var connection = require('../connection');

// READY BUT NEEDS TO TEST BETTER

function Report() {

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

  // Return all reports that exist
  this.get = function (res) {
    connection.acquire(function (err, con) {
      con.query('select * from reports', function (err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  // Return the report with the given id
  this.getReportByID = function (id, res) {
    connection.acquire(function (err, con) {
      con.query('select * from reports where id = ?', [id], function (err, result) {
        con.release();
        if (err) {
          res.send({ status: 404, message: 'Failed to get report by id' });
        } else {
          res.send(result);
        }
      });
    });
  };

  // Return all reports that the user with the given ID has
  this.getReportsByUserID = function (userID, res) {
    connection.acquire(function (err, con) {
      con.query('select * from reports where userid = ?', [userID], function (err, result) {
        con.release();
        if (err) {
          res.send({ status: 404, message: 'Failed to get user by id' });
        } else {
          res.send(result);
        }
      });
    });
  };

  // Return all reports of the user with the given report type id
  this.getReportsByReportTypeID = function (data, res) {
    connection.acquire(function (err, con) {
      con.query('select * from reports where userid = ? and reporttypeid = ?', [data.userID, data.reportTypeID], function (err, result) {
        con.release();
        if (err) {
          res.send({ status: 404, message: 'Failed to get reports by user id and report type id' });
        } else {
          res.send(result);
        }
      });
    });
  };

  this.create = function (report, res) {
    connection.acquire(function (err, con) {
      con.query('insert into reports set ?', report, function (err, result, data) {
        con.release();
        if (err) {
          res.send({ status: 412, message: 'Report creation failed' });
        } else {
          var headerResult = JSON.parse(JSON.stringify(result));
          res.json(headerResult['insertId']);
        }
      });
    });
  };

  this.update = function (report, res) {
    connection.acquire(function (err, con) {
      
      var sqlQuery = createUpdateSQL("reports", report);

      con.query(sqlQuery, function(err, result) {
        con.release();
        if (err) {
          res.send({ status: 412, message: 'Report update failed' });
        } else {
          res.send({ status: 200, message: 'Report updated successfully' });
        }
      });
    });
  };

  this.delete = function (id, res) {
    connection.acquire(function (err, con) {
      con.query('delete from reports where ID = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({ status: 412, message: 'Report delete failed' });
        } else {
          res.send({ status: 200, message: 'Report deleted successfully' });
        }
      });
    });
  };


}
module.exports = new Report();
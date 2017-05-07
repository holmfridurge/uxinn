var connection = require('../connection');

// READY BUT NEEDS TO TEST BETTER

function ReportType() {

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
      con.query('select * from report_type', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.getReportTypeByID = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('select * from report_type where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to get report by id'});
        } else {
          res.send(result);
        }
      });
    });
  };

  this.getReportTypeByName = function(name, res) {
    connection.acquire(function(err, con) {
      con.query('select * from report_type where name = ?', [name], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to get report by name'});
        } else {
          res.send(result);
        }
      });
    });
  };

  this.create = function(report_type, res) {
    connection.acquire(function(err, con) {
      con.query('insert into report_type set ?', report_type, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Report type creation failed'});
        } else {
          res.send({status: 0, message: 'Report type created successfully'});
        }
      });
    });
  };

  this.update = function(report_type, res) {
    connection.acquire(function(err, con) {
      var sqlQuery = createUpdateSQL("report_type", report_type);

      con.query(sqlQuery, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Report type update failed'});
        } else {
          res.send({status: 0, message: 'Report type updated successfully'});
        }
      });
    });
  };

  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from report_type where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to delete'});
        } else {
          res.send({status: 0, message: 'Deleted successfully'});
        }
      });
    });
  };

  
}
module.exports = new ReportType();
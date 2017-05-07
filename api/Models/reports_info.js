var connection = require('../connection');

// READY BUT NEEDS TO TEST BETTER

function ReportsInfo() {

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

  // Get all report information
  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from reports_info', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  // Get all report information by id
  this.getReportsInfoByID = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('select * from reports_info where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 404, message: 'Failed to get the report information by id'});
        } else {
          res.send(result);
        }
      });
    });
  };

  // Get all report information by report id
  this.getReportsInfoByReportID = function(reportID, res) {
    connection.acquire(function(err, con) {
      con.query('select * from reports_info where reportID = ?', [reportID], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 404, message: 'Failed to get the report information by report id'});
        } else {
          res.send(result);
        }
      });
    });
  };

  // Get all report information for specific question by question id
  this.getReportsInfoByQuestionID = function(questionID, res) {
    connection.acquire(function(err, con) {
      con.query('select * from reports_info where questionID = ?', [questionID], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 404, message: 'Failed to get the report information by question id'});
        } else {
          res.send(result);
        }
      });
    });
  };

  // Return information about a specific question of a specific report
  this.getReportQuestionInfoByReportID = function(data, res) {
    connection.acquire(function(err, con) {
      con.query('select * from reports_info where reportid = ? and questionid = ?', [data.reportID, data.questionID], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 404, message: 'Failed to get reports by report id and question id'});
        } else {
          res.send(result);
        }
      });
    });
  };

  // Add report information
  this.create = function(info, res) {
    connection.acquire(function(err, con) {
      con.query('insert into reports_info set ?', info, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 412, message: 'Report information creation failed'});
        } else {
          res.send({status: 200, message: 'Report information created successfully'});
        }
      });
    });
  };

  // Update specific report information
  this.update = function(info, res) {
    connection.acquire(function(err, con) {
      var sqlQuery = createUpdateSQL("reports_info", info);

      con.query(sqlQuery, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 412, message: 'Report information update failed'});
        } else {
          res.send({status: 200, message: 'Report information updated successfully'});
        }
      });
    });
  };

  // Delete the reports information with the given id
  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from reports_info where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 412, message: 'Failed to delete'});
        } else {
          res.send({status: 200, message: 'Deleted successfully'});
        }
      });
    });
  };

  this.deleteReportInfoInReport = function(reportID, res) {
    connection.acquire(function(err, con) {
      con.query('delete from reports_info where ReportID = ?', [reportID], function (err, result) {
        con.release();
        if (err) {
          res.send({ status: 404, message: 'Failed to delete' });
        } else {
          res.send({ status: 200, message: 'Deleted successfully' });
        }
      });
    })
  }

  
}
module.exports = new ReportsInfo();
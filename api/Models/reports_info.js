var connection = require('../connection');

// READY BUT NEEDS TO TEST BETTER

function ReportsInfo() {
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
          res.send({status: 1, message: 'Failed to get the report information by id'});
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
          res.send({status: 1, message: 'Failed to get the report information by report id'});
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
          res.send({status: 1, message: 'Failed to get the report information by question id'});
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
          res.send({status: 1, message: 'Failed to get reports by report id and question id'});
        } else {
          res.send(result);
        }
      });
    });
  };

  // Add report information
  this.create = function(report, res) {
    connection.acquire(function(err, con) {
      con.query('insert into reports_info set ?', report, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Report information creation failed'});
        } else {
          res.send({status: 0, message: 'Report information created successfully'});
        }
      });
    });
  };

  // Update specific report information
  this.update = function(report, res) {
    connection.acquire(function(err, con) {
      con.query('update reports_info set ? where id = ?', [report, report.id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Report information update failed'});
        } else {
          res.send({status: 0, message: 'Report information updated successfully'});
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
          res.send({status: 1, message: 'Failed to delete'});
        } else {
          res.send({status: 0, message: 'Deleted successfully'});
        }
      });
    });
  };

  
}
module.exports = new ReportsInfo();
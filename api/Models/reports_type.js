var connection = require('../connection');

// READY BUT NEEDS TO TEST BETTER

function ReportType() {
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
      con.query('update report_type set ? where id = ?', [report_type, report_type.id], function(err, result) {
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
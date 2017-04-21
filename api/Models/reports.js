var connection = require('../connection');

// READY BUT NEEDS TO TEST BETTER

function Report() {
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
      con.query('update reports set ? where id = ?', [report, report.id], function (err, result) {
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
      con.query('delete from reports where id = ?', [id], function (err, result) {
        con.release();
        if (err) {
          res.send({ status: 404, message: 'Failed to delete' });
        } else {
          res.send({ status: 200, message: 'Deleted successfully' });
        }
      });
    });
  };


}
module.exports = new Report();
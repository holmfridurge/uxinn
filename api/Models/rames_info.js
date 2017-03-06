var connection = require('../connection');

// READY BUT NEEDS TO TEST BETTER

function RamesInfo() {
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
  this.create = function(report, res) {
    connection.acquire(function(err, con) {
      con.query('insert into rames_info set ?', report, function(err, result) {
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
  this.update = function(report, res) {
    connection.acquire(function(err, con) {
      con.query('update rames_info set ? where id = ?', [report, report.id], function(err, result) {
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
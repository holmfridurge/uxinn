var connection = require('../connection');

// READY BUT NEEDS TO TEST BETTER

function ReportsCategory() {
  // Get all rames category
  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from rames_category', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  // Get a rames category by id
  this.getRamesCategoryByID = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('select * from rames_category where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to get the rames category by id'});
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
          res.send({status: 1, message: 'Failed to get the rames category by language id'});
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
            res.send({status: 1, message: 'Failed to get the rames category by category id and language id'});
            } else {
            res.send(result);
            }
          });
      });
  };

  // Add report information
  this.create = function(report, res) {
    connection.acquire(function(err, con) {
      con.query('insert into rames_category set ?', report, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Rames category creation failed'});
        } else {
          res.send({status: 0, message: 'Rames category created successfully'});
        }
      });
    });
  };

  // Update specific report information
  this.update = function(report, res) {
    connection.acquire(function(err, con) {
      con.query('update rames_category set ? where id = ?', [report, report.id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Rames category update failed'});
        } else {
          res.send({status: 0, message: 'Rames category updated successfully'});
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
          res.send({status: 1, message: 'Failed to delete'});
        } else {
          res.send({status: 0, message: 'Deleted successfully'});
        }
      });
    });
  };

  
}
module.exports = new ReportsCategory();
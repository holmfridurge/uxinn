var connection = require('../connection');

// READY BUT NEEDS TO TEST BETTER

function Language() {
    this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from languages', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.getLanguageByID = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('select * from languages where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to get language by id'});
        } else {
          res.send(result);
        }
      });
    });
  };

  this.getLanguageByName = function(name, res) {
    connection.acquire(function(err, con) {
      con.query('select * from languages where name = ?', [name], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to get language by name'});
        } else {
          res.send(result);
        }
      });
    });
  };

  this.create = function(language, res) {
    connection.acquire(function(err, con) {
      con.query('insert into languages set ?', language, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Language creation failed'});
        } else {
          res.send({status: 0, message: 'Language created successfully'});
        }
      });
    });
  };

  this.update = function(language, res) {
    connection.acquire(function(err, con) {
      con.query('update languages set ? where id = ?', [languages, languages.id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Language update failed'});
        } else {
          res.send({status: 0, message: 'Language updated successfully'});
        }
      });
    });
  };

  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from languages where id = ?', [id], function(err, result) {
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
module.exports = new Language();
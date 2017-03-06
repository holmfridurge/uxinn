var connection = require('../connection');

// READY BUT NEEDS TO TEST BETTER

function RamesQuestions() {
  // Get all rames questions
  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from rames_questions', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  // Get a rames question by id
  this.getRamesQuestionByID = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('select * from rames_questions where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 404, message: 'Failed to get the rames question by id'});
        } else {
          res.send(result);
        }
      });
    });
  };

  // Get all rames question by category id
  this.getRamesQuestionByCategoryID = function(categoryID, res) {
    connection.acquire(function(err, con) {
      con.query('select * from rames_questions where categoryID = ?', [categoryID], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 404, message: 'Failed to get the rames question by category id'});
        } else {
          res.send(result);
        }
      });
    });
  };

  // Get all rames question by languageID
  this.getRamesQuestionByLanguageID = function(languageID, res) {
    connection.acquire(function(err, con) {
      con.query('select * from rames_questions where languageID = ?', [languageID], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 404, message: 'Failed to get the rames question by language id'});
        } else {
          res.send(result);
        }
      });
    });
  };

  // Add rames question
  this.create = function(report, res) {
    connection.acquire(function(err, con) {
      con.query('insert into rames_questions set ?', report, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 412, message: 'Rames question creation failed'});
        } else {
          res.send({status: 200, message: 'Rames question created successfully'});
        }
      });
    });
  };

  // Update specific rames question
  this.update = function(report, res) {
    connection.acquire(function(err, con) {
      con.query('update rames_questions set ? where id = ?', [report, report.id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 412, message: 'Rames question update failed'});
        } else {
          res.send({status: 200, message: 'Rames question updated successfully'});
        }
      });
    });
  };

  // Delete the rames question with the given id
  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from rames_questions where id = ?', [id], function(err, result) {
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
module.exports = new RamesQuestions();
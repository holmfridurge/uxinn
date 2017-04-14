var connection = require('../connection');

// READY BUT NEEDS TO TEST BETTER

function DropdownChoice() {
    this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from question_dropdown_choices', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.getDropdownChoiceByID = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('select * from question_dropdown_choices where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to get question dropdown choices by id'});
        } else {
          res.send(result);
        }
      });
    });
  };

  this.create = function(choice, res) {
    connection.acquire(function(err, con) {
      con.query('insert into question_dropdown_choices set ?', choice, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Question dropdown choice creation failed'});
        } else {
          res.send({status: 0, message: 'Question dropdown choice created successfully'});
        }
      });
    });
  };

  this.update = function(choice, res) {
    connection.acquire(function(err, con) {
      con.query('update question_dropdown_choices set ? where id = ?', [choice, choice.ID], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Question dropdown choice update failed'});
        } else {
          res.send({status: 0, message: 'Question dropdown choice updated successfully'});
        }
      });
    });
  };

  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from question_dropdown_choices where id = ?', [id], function(err, result) {
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
module.exports = new DropdownChoice();
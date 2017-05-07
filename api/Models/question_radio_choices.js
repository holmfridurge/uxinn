var connection = require('../connection');

// READY BUT NEEDS TO TEST BETTER

function RadioChoice() {

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
      con.query('select * from question_radio_choices', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.getRadioChoiceByID = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('select * from question_radio_choices where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to get question radio choices by id'});
        } else {
          res.send(result);
        }
      });
    });
  };

  this.create = function(choice, res) {
    connection.acquire(function(err, con) {
      con.query('insert into question_radio_choices set ?', choice, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Question radio choice creation failed'});
        } else {
          res.send({status: 0, message: 'Question radio choice created successfully'});
        }
      });
    });
  };

  this.update = function(choice, res) {
    connection.acquire(function(err, con) {
      var sqlQuery = createUpdateSQL("question_radio_choices", choice);

      con.query(sqlQuery, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Question radio choice update failed'});
        } else {
          res.send({status: 0, message: 'Question radio choice updated successfully'});
        }
      });
    });
  };

  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from question_radio_choices where id = ?', [id], function(err, result) {
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
module.exports = new RadioChoice();
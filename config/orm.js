let connection = require("./connection.js");

function printQuestionMarks(num) {
    let arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

let orm = {
    selectAll: function(tableName, cb) {
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableName], function(err, result) {
            if (err) throw err;

            cb(result);
        });
    },
    
    insertOne: function(tableName, colName, burgerName, cb) {
        let queryString = "INSERT INTO ?? (??) VALUES (?)";
        
        connection.query(queryString, [tableName, colName, burgerName], function(err, res) {
            if (err) throw err;

            cb(res);
        });
    },

    updateOne: function(cb) {
        let queryString = "UPDATE burgers SET devoured = ?? WHERE id = ??";
        connection.query(queryString, function(err, res) {
            if (err) throw err;

            cb(res);
        });
    }
    
};

module.exports = orm;

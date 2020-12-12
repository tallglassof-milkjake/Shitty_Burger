let connection = require("./connection.js");

function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
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

    updateOne: function(table, objColVals, condition, cb) {
        let queryString = `UPDATE ${table}`;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, res) {
            if (err) throw err;

            cb(res.json());
        });
    }
    
};

module.exports = orm;

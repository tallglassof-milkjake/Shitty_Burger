let connection = require("./connection.js");

let orm = {
    selectAll: function(tableName, cb) {
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableName], function(err, result) {
            if (err) throw err;

            cb(result);
        });
    },
    
    insertOne: function(cb) {
        let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ('??', false)";
        connection.query(queryString, function(err, res) {
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

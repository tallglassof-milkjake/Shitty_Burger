let connection = require("./connection.js");

let orm = {
    selectAll: function(callback) {
        let queryString = 'SELECT * FROM burgers';
        connection.query(queryString, function(err, res) {
            if (err) throw err;

            callback(res);
        });
    },
    
    insertOne: function(callback) {
        let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ('??', false)";
        connection.query(queryString, function(err, res) {
            if (err) throw err;

            callback(res);
        });
    },

    updateOne: function(callback) {
        let queryString = "UPDATE burgers SET devoured = ?? WHERE id = ??";
        connection.query(queryString, function(err, res) {
            if (err) throw err;

            callback(res);
        });
    }
    
};

module.exports = orm;

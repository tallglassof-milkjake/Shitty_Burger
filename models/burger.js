let orm = require("../config/orm.js");

const burgers = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(burgerName, cb) {
        orm.insertOne("burgers", "burger_name", burgerName, function(res) {    
            cb(res);
        });
    },

    updateOne: function(devoured, requirement, cb) {
        orm.updateOne("burgers", devoured, requirement, function(res) {
            cb(res);
        });
    }
};

module.exports = burgers;
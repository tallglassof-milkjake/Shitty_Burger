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

    updateOne: function(objVals, condition, cb) {
        orm.updateOne("burgers", objVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burgers;
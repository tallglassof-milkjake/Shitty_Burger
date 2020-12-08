let orm = require("../config/orm.js");

const burgers = {
    selectAll: function(cb) {
        orm.selectAll("burger", function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
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
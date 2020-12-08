const express = require("express");
const burgers = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res) {
    burgers.selectAll(function(data) {
        let object = {
            burgers: data
        };
        console.log('Something, anything please!')
        res.render("index", object);
    });
});

module.exports = router;
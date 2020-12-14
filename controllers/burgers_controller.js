const express = require("express");
const burgers = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res) {
    burgers.selectAll(function(cb) {
        let object = {
            burgers: cb
        };
        
        res.render("index", object);
    });
    
});

router.post("/api/burger/:newBurger", function(req, res) {
    let newBurger = req.params.newBurger;

    console.log(req.body);

    burgers.insertOne(newBurger, function(result){
        res.json(result);
    });
});

router.put("/api/burger/:id", function(req, res) {

    let requirement = `id = ${req.params.id}`;

    console.log("requirement", requirement);

    console.log(req.body);

    burgers.updateOne({ devoured: req.body.devoured }, requirement, function(result) {
        res.json(result);
    })
});

module.exports = router;
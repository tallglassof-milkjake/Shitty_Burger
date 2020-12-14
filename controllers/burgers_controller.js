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

router.get("/api/burger", function(req, res) {
    res.json(res);
})

router.put("/api/burger/:id", function(req, res) {

    let requiurement = `id = ${req.params.id}`;

    console.log("requirement", requiurement);

    // console.log(req.params.id);
    console.log(req.body);

    burgers.updateOne({ devoured: req.body.devoured }, requiurement, function(result) {
        res.json(result);
    })

    // burgers.updateOne({
    //         devoured: req.body.devoured
    //     }, 
    //     condition, 
    //     function(result) {
    //         if (result.changedRows === 0) {
    //             // return res.status(404).end();
                
    //         }
    //         res.status(200).end();

    //     }
    // );
});

module.exports = router;
const express = require("express");
const burgers = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res) {
    burgers.selectAll(function(cb) {
        let object = {
            burgers: cb
        };

        let validate = /^[A-Za-z]+$/;
        
        if (object == validate) {
            
        }
        res.render("index", object);
    });
    
});

router.post("/api/burger/:newBurger", function(req, res) {
    let newBurger = req.params.newBurger;

    burgers.insertOne(newBurger, function(result){
        res.json(result);
    });
});

// router.put("/api/update/:burger_name", function(req, res) {

//     let condition = `id = ${req.params.id}`;

//     console.log("condition", condition);

//     burgers.updateOne(
//         {
//             devoured: req.body.devoured
//         },
//         condition,
//         function(result) {
//             if (result.changedRows === 0) {
//                 return res.status(404).end();
//             }
//             res.status(200).end();
//         }
//     );
// });

module.exports = router;
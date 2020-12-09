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

// router.post("/api/burgers", function(req, res) {
//     burgers.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
//         res.json({id: result.id});
//     });
// });

// router.put("/api/burger/:id", function(req, res) {
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
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req,res){
    burger.selectAll(function(data){
        // console.log(data)
        var burgerObj = {
            burger: data
        }
        res.render("index",burgerObj)
    })
})

router.post("/api/burgers", function(req,res){
    burger.insertOne(req.body.burger_name, function(result){
        console.log(result)
    })
})

router.put("/api/burgers/:id",function(req,res){
    var id = req.params.id;

    burger.updateOne(id, function(result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    }) 
})

module.exports = router;
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
    orm.selectAll("burgers", function(res){
            callback(res)
        })
    },

    insertOne: function(val,callback) {
        orm.insertOne("burgers","burger_name",val, function(res){
            callback(res)
        })
    },

    updateOne: function(id, callback) {
        orm.updateOne(id, function(res){
            callback(res)
        }) 
    }
}

module.exports = burger;


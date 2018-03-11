var connection = require("./connection.js");

var orm = {
    selectAll: function(table,callback) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err,res){
            if (err) throw err;
            callback(res);
        })
    },

    insertOne: function(table,col,val,callback){
        var queryString = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(queryString, [table,col,val], function(err,res){
            if (err) throw err;
            callback(res);
        })
    },

    updateOne: function(id , callback){
        var queryString = "UPDATE burgers SET devoured = true WHERE id = (?)"
        connection.query(queryString, [id], function(err,res){
            if (err) throw err;
            callback(res)
        })
    }
}

module.exports = orm;
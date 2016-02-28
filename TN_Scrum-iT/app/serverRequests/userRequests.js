
/* global mongoose */
module.exports = function(app) {
    
/* global ProjectModel */
var dbModels = require('../database/models/userSchema');

    app.post("/registerUser",function(req,res){
        console.log("Inside register user");
       dbModels.statics.addUser(req.body.params).then(function(data){ res.send(data); }); 
    });
    
     app.get("/getAllUser",function(req,res){
        console.log("Inside get All user");
       dbModels.statics.findAllUsers(req.body.params).then(function(data){ res.send(data); }); 
    })
    
}
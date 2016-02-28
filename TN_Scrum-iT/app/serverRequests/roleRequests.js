/* global mongoose */
module.exports = function(app) {

/* global RoleModel */
var dbModels = require('../database/models/roleSchema');
  
    app.post("/addRole", function(req, res) {
        dbModels.statics.addRole(req.body.params).then(function(data){ res.send(data); });
    });
    
    app.get("/getAllRoles",function(req,res){
     dbModels.statics.findAllRoles().then(function(data){ res.send(data); });
    });
    
    app.post("/deleteRole",function(req,res){
       dbModels.statics.deleteRole(req.body.params.id).then(function(data){ res.send(data); }); 
    });
    
    app.post("/editRole",function(req,res){
       dbModels.statics.editRole(req.body.params).then(function(data){ res.send(data); }); 
    });

}
/* global mongoose */
module.exports = function(app) {
    
/* global PriorityModel */
var dbModels = require('../database/models/prioritySchema');
  
    app.post("/addPriority", function(req, res) {
        dbModels.statics.addPriority(req.body.params).then(function(data){ res.send(data); });
    });
    
    app.get("/getAllPriorities",function(req,res){
     dbModels.statics.findAllPriorities().then(function(data){ res.send(data); });
    });
    
    app.post("/deletePriority",function(req,res){
       dbModels.statics.deletePriority(req.body.params.id).then(function(data){ res.send(data); }); 
    });
    
    app.post("/editPriority",function(req,res){
       dbModels.statics.editPriority(req.body.params).then(function(data){ res.send(data); }); 
    });

}
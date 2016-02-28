/* global mongoose */
module.exports = function(app) {
    
/* global ProjectModel */
var dbModels = require('../database/models/projectSchema');
  
   app.post("/addProject",function(req,res){
     dbModels.statics.addProject(req.body.params);
   });
   
   app.get("/getAllProjects",function(req,res){
     dbModels.statics.getAllProjects().then(function(data){ res.send(data); });
    });
    
    app.post("/deleteProject",function(req,res){
       dbModels.statics.deleteProject(req.body.params.id).then(function(data){ res.send(data); }); 
    });
    
    app.post("/editProject",function(req,res){
       dbModels.statics.editProject(req.body.params).then(function(data){ res.send(data); }); 
    });


}
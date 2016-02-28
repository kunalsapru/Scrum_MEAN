/* global mongoose */
module.exports = function(app) {
    
/* global StatusModel */
var dbModels = require('../database/models/statusSchema');
  
   app.post("/addStatus",function(req,res){
     dbModels.statics.addStatus(req.body.params);
   });
   
   app.get("/getAllStatus",function(req,res){
     dbModels.statics.getAllStatus().then(function(data){ res.send(data); });
    });
    
    app.post("/deleteStatus",function(req,res){
       dbModels.statics.deleteStatus(req.body.params.id).then(function(data){ res.send(data); }); 
    });
    
    app.post("/editStatus",function(req,res){
       dbModels.statics.editStatus(req.body.params).then(function(data){ res.send(data); }); 
    });


}
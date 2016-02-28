/* global mongoose */
var statusSchema = new mongoose.Schema({
     name : {type :String, unique : true},
    description : {type :String}     
});

var StatusModel = mongoose.model("status",statusSchema)
statusSchema.statics.addStatus = function(statusDoc) {
    var status = StatusModel(statusDoc);
        return status.saveQ(function(err,doc){
            if(err)
                console.log(err);
            else
                console.log(doc);
        });
    }
    

// Gets list of status from database
statusSchema.statics.getAllStatus = function(){
   return StatusModel.findQ();
}

// Edit status from the databse

statusSchema.statics.editStatus = function(params){
  console.log("Inside edit Status");
  console.log(params);
  var query = {"_id":params.id};
 var update = params.doc;
 var options = {new: false};
 return StatusModel.findOneAndUpdateQ(query,update,options,function(error,status){
   if(error){
       console.log(error);
   }  
 });
  
  
  
   //return StatusModel.findByIdQ();
}

//Delete Status
statusSchema.statics.deleteStatus = function(id){
  console.log("Inside delete Status");
  console.log(id);
  return StatusModel.findOneAndRemove({'_id': id });
   
}
    
    

module.exports= statusSchema;
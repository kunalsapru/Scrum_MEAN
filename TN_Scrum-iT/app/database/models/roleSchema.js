/* global mongoose */
var roleSchema = new mongoose.Schema({
    name : {type :String, unique : true},
    description : {type :String}    
});

var RoleModel = mongoose.model("role",roleSchema);

// Add role in Database
roleSchema.statics.addRole = function(roleDoc) {
        var role = new RoleModel(roleDoc);
        return role.saveQ(function(err,doc){
            if(err)
                console.log(err);
            else
                console.log(doc);
        });
    }

// Gets list of roles from database
roleSchema.statics.findAllRoles = function(){
   return RoleModel.findQ();
}

// Edit role from the databse
roleSchema.statics.editRole = function(params){
  console.log("Inside edit role");
  console.log(params);
  var query = {"_id":params.id};
 var update = params.doc;
 var options = {new: false};
 return RoleModel.findOneAndUpdateQ(query,update,options,function(error,users){
   if(error){
       console.log(error);
   }  
 });
}

//Delete Role
roleSchema.statics.deleteRole = function(id){
  console.log("Inside delete Role");
  console.log(id);
  return RoleModel.findOneAndRemove({'_id': id });
   //return RoleModel.findByIdQ();
}

module.exports = roleSchema;
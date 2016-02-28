/* global mongoose,Schema */
var userSchema = new mongoose.Schema({
                  firstName : {type : String, required : true},
                  lastName : {type : String, required : true}, 
                  email : {type : String, required : true}, 
                  password : {type : String, required : true},
                  username : {type :String , unique : true}
});

var UserModel = mongoose.model("user",userSchema);
// Add user in Database
userSchema.statics.addUser = function(userDoc) {
    console.log("Inside register user schema");
    console.log(userDoc);
        var user = UserModel(userDoc);
        return user.saveQ(function(err,doc){
            if(err)
                console.log(err);
            else
                console.log(doc);
        });
    }

// Gets list of Users from database
userSchema.statics.findAllUsers = function(){
   return UserModel.findQ();
}

// Edit User from the databse
userSchema.statics.editUser = function(params){
  console.log("Inside edit User");
  console.log(params);
  var query = {"_id":params.id};
 var update = params.doc;
 var options = {new: false};
 return UserModel.findOneAndUpdateQ(query,update,options,function(error,users){
   if(error){
       console.log(error);
   }  
 });
}

//Delete User
userSchema.statics.deleteUser = function(id){
  console.log("Inside delete User");
  console.log(id);
  return UserModel.findOneAndRemove({'_id': id });
   //return UserModel.findByIdQ();
}

module.exports = userSchema;

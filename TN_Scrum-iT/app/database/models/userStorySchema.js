/* global Schema */
/* global mongoose */

var userStorySchema = new mongoose.Schema({
    name : {type : String, required : true  },
    description : {type : String},
    projectId : {type : Schema.Types.ObjectId, ref : "project"},
    statusId : {type : Schema.Types.ObjectId, ref : "status"},
    userStoryType : {type : Schema.Types.ObjectId, ref : "user_story_type"},
    priority : {type : Schema.Types.ObjectId, ref : "priority"},
    createdBy : {type : Schema.Types.ObjectId, ref : "user"},
    createdDate: {type : Date},
    modifiedDate : {type : Date}
   });

var UserStoryModel = mongoose.model("user_story",userStorySchema);
module.exports= UserStoryModel;
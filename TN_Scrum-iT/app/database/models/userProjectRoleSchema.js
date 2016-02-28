/* global Schema */
/* global mongoose */

var userProjectRoleSchema = new mongoose.Schema({
    projectId : {type : Schema.Types.ObjectId, ref : "project"},
    userId : {type : Schema.Types.ObjectId, ref : "user"},
    roleId : { type: Schema.Types.ObjectId, ref : "role"},
    createdBy : {type : Schema.Types.ObjectId, ref : "user"}
});

var UserProjectRoleModel = mongoose.model("user_project_role",userProjectRoleSchema);
module.exports= UserProjectRoleModel;
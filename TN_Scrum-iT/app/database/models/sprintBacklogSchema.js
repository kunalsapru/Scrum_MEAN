/* global Schema */
/* global mongoose */

var sprintBacklogSchema = new mongoose.Schema({
    name : {type : String, required : true  },
    description : {type : String},
    userStoryId : {type : Schema.Types.ObjectId, ref : "user_story"},
    sprintId : {type : Schema.Types.ObjectId, ref : "sprint"},
    statusId : {type : Schema.Types.ObjectId, ref : "status"},
    estimatedEffort : {type : Number},
    actualEffort : {type : Number}
     });

var SprintBacklogModel = mongoose.model("sprint_backlog",sprintBacklogSchema);
module.exports= SprintBacklogModel;
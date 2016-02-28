/* global Schema */
/* global mongoose */

var taskSchema = new mongoose.Schema({
    name : {type : String, required : true  },
    description : {type : String},
    assignee : {type : Schema.Types.ObjectId, ref : "user"},
    sprintBacklogId : {type : Schema.Types.ObjectId, ref : "sprint_backlog"},
    statusId : {type : Schema.Types.ObjectId, ref : "status"},
    estimatedEffort : {type : Number},
    currentEffort : {type : Number},
    actualEffort : {type : Number}
});

var TaskModel = mongoose.model("task",taskSchema);
module.exports= TaskModel;
/* global Schema */
/* global mongoose */

var sprintSchema = new mongoose.Schema({
    name : {type : String, required : true  },
    description : {type : String},
    projectId : {type : Schema.Types.ObjectId, ref : "project"},
    createdBy : {type : Schema.Types.ObjectId, ref : "user"},
    statusId : {type : Schema.Types.ObjectId, ref : "status"},
    startDate : {type : Date, required : true},
    endDate : {type : Date, required : true},
    estimatedEffort : {type : Number, max : 240},
    actualEffort : {type : Number}
});

var SprintModel = mongoose.model("sprint",sprintSchema);
module.exports= SprintModel;
angular.module('ProjectControllerModule', []).controller('ProjectController', function($scope, 
                projectService) {
    console.log("Inside Project Controller");
    $scope.addNewProject = function() {
        var projectName = $scope.projectName;
        var projectDescription=$scope.projectDescription;
        var projectDoc = {
            name : projectName,
            description : projectDescription       
        }
        projectService.addProject(projectDoc).then(function(res){
            console.log(res);
            $scope.projectName = res;
        });
        projectService.getAllProjects().then(function(res){
             $scope.projects=res.data; 
         });
    }
    
    projectService.getAllProjects().then(function(res){
        console.log("Response is::")
        console.log(res);
       $scope.projects=res.data; 
    });
    
    $scope.deleteProject = function(e){
        var idOfTheStatus=$(e.target).data('id');
        console.log(idOfTheStatus);
        projectService.deleteProject(idOfTheStatus);
        projectService.getAllProjects().then(function(res){
             $scope.projects=res.data; 
         });        
    }
    
    $scope.updateProject = function(id,projectName,projectDescription){
    var projectDoc = {
            name : projectName,
            description : projectDescription       
        }
        
     projectService.editProject(id,projectDoc);
   }
});
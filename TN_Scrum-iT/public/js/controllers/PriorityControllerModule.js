angular.module('PriorityControllerModule', []).controller('PriorityController', function($scope, 
                priorityService) {
    console.log("Inside Priority Controller");
    $scope.addNewPriority = function() {
        var priorityName = $scope.priorityName;
        var priorityDescription = $scope.priorityDescription;
        var priorityDoc = {
            name : priorityName,
            description : priorityDescription       
        }
        priorityService.addPriority(priorityDoc).then(function(res){
            $scope.priorityName = res;
        });
        priorityService.getAllPriorities().then(function(res){
             $scope.priorities=res.data; 
         });
    }
    
    priorityService.getAllPriorities().then(function(res){
        console.log("Response is::")
        console.log(res);
       $scope.priorities=res.data; 
    });
    
    $scope.deletePriority = function(e){
        var idOfThePriority=$(e.target).data('id');
        console.log(idOfThePriority);
        priorityService.deletePriority(idOfThePriority);
        priorityService.getAllPriorities().then(function(res){
             $scope.priorities=res.data; 
         });
        
    }
   
   $scope.updatePriority = function(id,priorityName,priorityDescription){
    var priorityDoc = {
            name : priorityName,
            description : priorityDescription       
        }
        
     priorityService.editPriority(id,priorityDoc);
   }
    
});
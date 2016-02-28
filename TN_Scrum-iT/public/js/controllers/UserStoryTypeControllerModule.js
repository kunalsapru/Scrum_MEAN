angular.module('UserStoryTypeControllerModule', []).controller('UserStoryTypeController', function($scope, 
                userStoryTypeService) {
    console.log("Inside User Story Type Controller");
    $scope.addNewUserStoryType = function() {
        var userStoryTypeName = $scope.userStoryTypeName;
        var userStoryTypeDescription= $scope.userStoryTypeDescription;
        var userStoryTypeDoc = {
            name : userStoryTypeName,
            description : userStoryTypeDescription        
        }
        userStoryTypeService.addUserStoryType(userStoryTypeDoc).then(function(res){
            $scope.userStoryTypeName = res;
        });
        userStoryTypeService.getAllUserStoryTypes().then(function(res){
             $scope.userStoryTypes=res.data; 
         });
    }
    
    userStoryTypeService.getAllUserStoryTypes().then(function(res){
        console.log("Response is::")
        console.log(res);
       $scope.userStoryTypes=res.data; 
    });
    
    $scope.deleteUserStoryType = function(e){
        var idOfTheUserStoryType=$(e.target).data('id');
        console.log(idOfTheUserStoryType);
        userStoryTypeService.deleteUserStoryType(idOfTheUserStoryType);
        userStoryTypeService.getAllUserStoryTypes().then(function(res){
             $scope.userStoryTypes=res.data; 
         });        
    }
    
    $scope.updateUserStoryType = function(id,userStoryTypeName,userStoryTypeDescription){
    var userStoryTypeDoc = {
            name : userStoryTypeName,
            description : userStoryTypeDescription       
        }
        
     userStoryTypeService.editUserStoryType(id,userStoryTypeDoc);
   }
});
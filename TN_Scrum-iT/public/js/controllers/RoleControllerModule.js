angular.module('RoleControllerModule', []).controller('RoleController', function($scope, 
                roleService) {
    console.log("Inside Role Controller");
    $scope.addNewRole = function() {
        var roleName = $scope.roleName;
        var roleDescription= $scope.roleDescription; 
        var roleDoc = {
            name : roleName,
            description : roleDescription       
        }
        roleService.addRole(roleDoc).then(function(res){
            $scope.roleName = res;
        });
        roleService.getAllRoles().then(function(res){
            $scope.roles=res.data; 
         });
    }
    
    roleService.getAllRoles().then(function(res){
        console.log("Response is::")
        console.log(res);
       $scope.roles=res.data; 
    });
    
    $scope.deleteRole = function(e){
        var idOfTheRole=$(e.target).data('id');
        console.log(idOfTheRole);
        roleService.deleteRole(idOfTheRole);
        roleService.getAllRoles().then(function(res){
             $scope.roles=res.data; 
         });        
    }
    
     $scope.updateRole = function(id,roleName,roleDescription){
    var roleDoc = {
            name : roleName,
            description : roleDescription       
        }
        
     roleService.editRole(id,roleDoc);
   }
    
});
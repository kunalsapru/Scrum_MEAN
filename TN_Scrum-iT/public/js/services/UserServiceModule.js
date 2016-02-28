angular.module('UserServiceModule', []).factory('userService', ['$http', function($http) {

    return {
        registerUser : function(firstName,lastName,emailAddress,password,username){
            return  $http.post("/registerUser"
            ,{ params : {
                 firstName :firstName,
                  lastName : lastName, 
                  email : emailAddress, 
                  password : password,
                  username : username
                   }
                  })
        }
        
    }
}]);
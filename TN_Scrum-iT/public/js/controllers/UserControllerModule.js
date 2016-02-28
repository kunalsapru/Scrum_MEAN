angular.module('UserControllerModule', []).controller('UserController', function($scope,$location, 
                userService) {
    console.log("Inside User Controller");
    $scope.registerUser = function(){
        console.log("Clicked");
    var firstName= $scope.firstName;
    var lastName = $scope.lastName;
    var emailAddress = $scope.emailAddress;
    var password = $scope.password;
    var confirmPassword = $scope.confirmPassword;
    var userName = $scope.userName;
    //var userRoleId=$scope.userRoleList._id;
    if(password==confirmPassword){
        //service hit
        $scope.registerUserInfoFromServer = userService.registerUser(firstName,lastName,emailAddress,password,userName).then(function(dataFromServer){
           $scope.responseFromServer = dataFromServer.data;
           if($scope.responseFromServer == "User_Registered")
           $location.path("/");
        });
    }else{
        $scope.message="Password doesnot match";
    }
    
    }
});
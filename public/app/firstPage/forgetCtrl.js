
app.controller("forgetCtrl", function($scope, $http) {

    $scope.msg="Enter your Email Id and we will send you an email with the link where you can change your password."

    $scope.forgetPassword = function(){
        $http.post('/users/forgetPassword',$scope.user).success(function(response){
          console.log(response);
          $scope.msg="An email has been send to "+$scope.user.email+" with the link where you can change your password."
        });
    }

});

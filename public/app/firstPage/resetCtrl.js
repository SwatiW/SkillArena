
app.controller("resetCtrl", function($scope, $http) {

  $scope.msg="Enter your desired password and confirm it. We will change the password for you."

    $scope.resetPassword = function(){
      if($scope.user.confirmPassword == $scope.user.password){
        $http.post('/users/resetPassword',$scope.user).success(function(response){
          console.log(response);
          $scope.msg="Your password has been changed successfully."
        });
      }
      else {
        $scope.msg="The passwords do not match. Please enter again."
        $scope.user ={"confirmPassword":"","password":""}
      }
    };
});

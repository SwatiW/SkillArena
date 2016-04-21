app.controller('homeCtrl',function($scope,$http,$state,$rootScope){
  $scope.quantTopics=false;
  $scope.logicTopics=false;
  $scope.verbalTopics=false;
  $scope.login=true;


  $scope.showQuantTopics=function(){
    $scope.quantTopics=true;
    $scope.logicTopics=false;
    $scope.verbalTopics=false;
  }

  $scope.showLogicTopics=function(){
    $scope.logicTopics=true;
    $scope.quantTopics=false;
    $scope.verbalTopics=false;
  }

  $scope.showVerbalTopics=function(){
    $scope.verbalTopics=true;
    $scope.logicTopics=false;
    $scope.quantTopics=false;
  }

  $scope.loginPage=function(){
    $scope.login=true
  }

  $scope.signUpPage=function(){
    $scope.login=false;
  }

  $scope.login=function(user){
    console.log(user);
    $http.post('/users/login',user).success(function(response){
      console.log(response);
      if(response.error == false){
        $rootScope.username=response.data.username
        $rootScope.email=response.data.email
        $state.go('index.dashboard')
      }
      });
  }

  $scope.signUp=function(user){

    if(user.signUpPassword === user.confirmPassword){
        console.log(user);
      $http.post('/users/signUp',user).success(function(response){
          console.log(response);

        });
    }
    else{
      //give error that Password do not match
    }
  }


});

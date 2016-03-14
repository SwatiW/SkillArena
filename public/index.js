angular.module('formApp', ['ui.router', ])


// configuring our routes
// =============================================================================

// .config(function($stateProvider, $urlRouterProvider) {
//
//     $stateProvider
//
// });


.controller('indexCtrl',function($scope,$http){
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

  $scope.login=function(){
    $http.post('/users/login', $scope.user).success(function(response){

      });
  }

  $scope.signUp=function(user){

    if(user.signUpPassword === user.confirmPassword){
      $http.post('/users/signUp',user).success(function(response){
          
        });
    }
    else{
      //give error that Password do not match
    }
  }


});

angular.module('formApp', ['ui.router', ])


// configuring our routes
// =============================================================================

// .config(function($stateProvider, $urlRouterProvider) {
//
//     $stateProvider
//
// });


.controller('indexCtrl',function($scope){
  $scope.quantTopics=false;
  $scope.logicTopics=false;
  $scope.verbalTopics=false;

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
});

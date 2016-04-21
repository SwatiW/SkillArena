
app.controller("dashCtrl", function($scope, $http, $state,$rootScope) {

  $scope.solve=function(){
    $http.get('/questions/all').success(function(response){
      console.log(response);
      $rootScope.questions=response.data
      $state.go('index.solve')
    });

  }

});

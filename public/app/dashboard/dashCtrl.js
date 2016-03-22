
app.controller("dashCtrl", function($scope, $http, $state) {

$scope.solve=function(){
  $state.go('index.solve')
}

});

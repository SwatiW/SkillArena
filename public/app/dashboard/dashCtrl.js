
app.controller("dashCtrl", function($scope, $http, $state,$rootScope) {

  $http.get('/users/currentScores/'+$rootScope.username).success(function(response){
    console.log(response);
    var config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#807dba";
    config1.textColor = "#807dba";
    config1.waveTextColor = "#FFAAAA";
    config1.waveColor = "#d1c4e9";
    config1.circleThickness = 0.1;
    config1.textVertPosition = 0.2;
    config1.waveAnimateTime = 1000;

    var config2 = liquidFillGaugeDefaultSettings();
    config2.circleColor = "#e08214";
    config2.textColor = "#e08214";
    config2.waveTextColor = "#FFAAAA";
    config2.waveColor = "#ffccbc";
    config2.circleThickness = 0.1;
    config2.textVertPosition = 0.2;
    config2.waveAnimateTime = 1000;

    var config3 = liquidFillGaugeDefaultSettings();
    config3.circleColor = "#41ab5d";
    config3.textColor = "#41ab5d";
    config3.waveTextColor = "#FFAAAA";
    config3.waveColor = "#c8e6c9";
    config3.circleThickness = 0.1;
    config3.textVertPosition = 0.2;
    config3.waveAnimateTime = 1000;

    var gauge1= loadLiquidFillGauge("fillgauge1",$scope.calculate (response.data.scores_quant,response.data.questions_quant), config1);
    var gauge2= loadLiquidFillGauge("fillgauge2", $scope.calculate( response.data.scores_logical,response.data.questions_logical), config2);
    var gauge3= loadLiquidFillGauge("fillgauge3",$scope.calculate ( response.data.scores_verbal,response.data.questions_verbal), config3);
  });


 $scope.calculate=function(num,den){
   if(den !=0)
      $scope.percent=(num/den)*100;
   else {
       $scope.percent=0;
   }
   return $scope.percent
 }

  $scope.solve=function(){
    $http.get('/questions/all').success(function(response){
      console.log(response);
      $rootScope.questions=response.data
      $state.go('index.solve')
    });

  }

});

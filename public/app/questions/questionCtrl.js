
app.controller("questionCtrl",  function ($scope,$rootScope) {
  $scope.topics =
        [
          {title: 'Percentages'},
          {title: 'Averages'},
          {title: 'Work and Time'},
          {title: 'Pipes and Cisterns'},
          {title: 'Profit and Loss'},
          {title: 'Shares'},
          {title: 'Simple Interest and Compound Interest'},
          {title: 'Mixtures and Alligations'},
          {title: 'Permutations and Combinations'},
          {title: 'Probability'}
        ];

  $scope.goto=function(topic){

  }
});

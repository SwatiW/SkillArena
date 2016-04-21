
app.controller("questionCtrl",  function ($scope,$rootScope,$http) {
  $scope.quantTopics =
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
        $scope.logicalTopics =
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
              $scope.verbalTopics =
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
    $http.get('/questions/'+topic).success(function(response){
      console.log(response);
      $rootScope.topicQues=response.data
    });
  }

  $scope.change = function (num,givenans){
             if(givenans === $rootScope.questions[num].answer)
             {
               $rootScope.questions[num].correctAns=true;
             }
             else {
                $rootScope.questions[num].correctAns=false;
             }
             $rootScope.questions[num].attempted=true;
   };
});

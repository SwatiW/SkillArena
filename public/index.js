angular.module('formApp', ['ui.router', ])


// configuring our routes
// =============================================================================

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('index', {
            url: '/index',
            views:{
              '':{templateUrl: 'html/index.html'},
              'quant@index':{templateUrl: 'html/quantInfo.html'},
              'logic@index':{templateUrl: 'html/logicInfo.html'},
              'verbal@index':{templateUrl: 'html/verbalInfo.html'},
            },

          //  controller: 'formController'
        })

        .state('index.quant', {
            url: '/index',
            templateUrl: 'app/firstpage/quantTopics.html',
          //  controller: 'timingsCtrl'
        })

        .state('index.logic', {
            url: '/index',
            templateUrl: 'app/firstpage/logicTopics.html',
          //  controller: 'timingsCtrl'
        })

        .state('index.verbal', {
            url: '/index',
            templateUrl: 'app/firstpage/verbalTopics.html',
          //  controller: 'timingsCtrl'
        })
        //
        // // url will be /form/payment
        // .state('form.sportsinfo', {
        //     url: '/sportsinfo',
        //     templateUrl: 'html/form-sportsinfo.html',
        //     controller: 'sportsinfoCtrl'
        // })
        //
        // .state('form.bankdetails', {
        //     url: '/bankdetails',
        //     templateUrl: 'html/form-bankdetails.html',
        //     controller: 'bankdetailsCtrl'
        // }).
        // state('form.photos', {
        //     url: '/photos',
        //     templateUrl: 'html/form-photos.html',
        //     controller: 'photosCtrl'
        // }).
        // state('form.summary', {
        //     url: '/summary',
        //     templateUrl: 'html/form-summary.html',
        //     controller: 'summaryCtrl'
        // }).
        // state('form.dashboard', {
        //     url: '/dashboard',
        //     templateUrl: 'html/form-dashboard.html',
        //     controller: 'dashboardCtrl'
        // });

    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/form/profile');
});

var app=angular.module('formApp', ['ui.router' ])

// configuring our routes
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        // route to show our basic form (/form)
        .state('index', {
            url: '/index',
            templateUrl: 'index.html',
        })

        .state('index.home', {
            url: '/home',
            templateUrl: 'app/firstPage/home.html',
            controller: 'homeCtrl'
        })

        // url will be /form/interests
        .state('index.forgetPassword', {
            url: '/forgetPassword',
            templateUrl: 'app/firstPage/forgetPassword.html',
            controller: 'forgetCtrl'
        })

        // url will be /form/payment
        .state('index.resetPassword', {
            url: '/resetPassword',
            templateUrl: 'app/firstPage/resetPassword.html',
            controller: 'resetCtrl'
        })

        .state('index.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'dashCtrl'
        })

        .state('index.solve', {
            url: '/solve',
            templateUrl: 'app/questions/question.html',
            controller: 'questionCtrl'
        })

        .state('index.contact', {
            url: '/contact',
            templateUrl: 'app/firstPage/contact.html',
        })

        .state('index.about', {
            url: '/about',
            templateUrl: 'app/firstPage/about.html',
        })



    $urlRouterProvider.otherwise('/index/home');
});

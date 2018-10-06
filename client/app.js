var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
            controller: 'OscesController',
            templateUrl: 'views/osces.html'
        })
        .when('/osces', {
            controller: 'OscesController',
            templateUrl: 'views/osces.html'
        })
        .when('/osces/details/:id', {
            controller: 'OscesController',
            templateUrl: 'views/osce_details.html'
        })
        .when('/osces/add', {
            controller: 'OscesController',
            templateUrl: 'views/add_osce.html'
        })
        .when('/osces/edit/:id', {
            controller: 'OscesController',
            templateUrl: 'views/edit_osce.html'
        })
        .when('/paeds', {
            controller: 'OscesController',
            templateUrl: 'views/paeds.html'
        })
        .when('/geris', {
            controller: 'OscesController',
            templateUrl: 'views/geris.html'
        })
        .when('/gp', {
            controller: 'OscesController',
            templateUrl: 'views/gp.html'
        })
        .when('/obs', {
            controller: 'OscesController',
            templateUrl: 'views/obs.html'
        })
        .when('/psych', {
            controller: 'OscesController',
            templateUrl: 'views/psych.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'OscesController',
		templateUrl: 'views/osces.html'
	})
	.when('/osces', {
		controller:'OscesController',
		templateUrl: 'views/osces.html'
	})
	.when('/osces/details/:id',{
		controller:'OscesController',
		templateUrl: 'views/osce_details.html'
	})
	.when('/osces/add',{
		controller:'OscesController',
		templateUrl: 'views/add_osce.html'
	})
	.when('/osces/edit/:id',{
		controller:'OscesController',
		templateUrl: 'views/edit_osce.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});

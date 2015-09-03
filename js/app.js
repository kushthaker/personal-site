var app = angular.module('kush', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '../partials/home.html',
		controller: 'homeCtrl as ctrl'
	})
	.when('/projects', {
		templateUrl: '../partials/projects.html',
		controller: 'homeCtrl as ctrl'
	})
	.when('/', {
		templateUrl: '../partials/work.html',
		controller: 'homeCtrl as ctrl'
	})
	.otherwise({
		redirectTo: '/'
	})

});

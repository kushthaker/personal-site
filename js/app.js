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
	.when('/resume', {
		templateUrl: '../partials/resume.html',
		controller: 'homeCtrl as ctrl'
	})
	.otherwise({
		redirectTo: '/'
	})

});

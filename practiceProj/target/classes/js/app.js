var myapp = angular.module("myapp", ['ngResource','ngRoute']);

myapp.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl : 'html/login.html',
		controller : 'login-ctrl'
	})
	.when("/test", {
		templateUrl : 'html/test.html'
	});
});
	

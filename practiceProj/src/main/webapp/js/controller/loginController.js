myapp.controller("login-ctrl",function($scope){
	
	$scope.username = '';
	$scope.password = '';
	
		
	$scope.login = function(){
		alert(username);
		/*loginService.login($scope.username,$scope.password);*/
	};


});
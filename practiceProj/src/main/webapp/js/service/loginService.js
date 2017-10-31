myapp.factory('loginService', ['$http', function(){
	
	return{
		login : function(user, pass){
			alert(user+''+pass);
		}	
	}
	
}]);
	

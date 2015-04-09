app_services.service('UserService', function ($http) {
	this.findUser = function(){
		console.log("service")
		return $http.get('../js/data/users.json').success(function (){});
	}
})
app_controllers
.controller('LoginCtrl', function ($scope, UserService, $location) {
	console.log("login controller")
	$scope.user = {"name":"","pwd":""};
	$scope.findUser = function(username){
		UserService.findUser().then(function (data){
			if(_.has(data.data,username)){
				$location.path('/home/store')
			}
			else{
				$scope.user.name = "";
			}
		});
	}
}) 
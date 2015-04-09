var app_controllers = angular.module('starter.controllers', [])

app_controllers.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $location) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.tab = 'home-store';
  $scope.go = function(url){
  	$location.path(url);
  	return true;
  }
})

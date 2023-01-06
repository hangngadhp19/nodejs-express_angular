/*
var app = angular.module('myApp', []);

app.controller('myController', myController);

function myController($scope, $http) {
  $scope.title = 'Danh sach User!!!';
  /*
  $scope.userName = '';
  $scope.userId = 0;

  $scope.getName = function() {
    $http.get('/api/getName/' + $scope.userId).then(function(result) {
      $scope.userName = result.data;
    });
  }
  */
/*
  $scope.listUsers = [];

  $scope.getListUsers = function(){
    $http.get('/user').then(function(result) {
      $scope.listUsers = result.data;
    });
  }
  $scope.getListUsers();
}
*/

var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/user'); //Mọi đường dẫn không hợp lệ đều được chuyển đến state user

    $stateProvider.state('user', {
      url: '/user',
      templateUrl: 'views/user.html',

      resolve: {
      listUsers: function($http) {
        return $http.get('/user').then(function(result) {
          return result.data; //get all user
        });
      }
    },
    controller: function(listUsers) {
      this.listUsers = listUsers;
    },
    controllerAs: 'userCtrl'
    });
});

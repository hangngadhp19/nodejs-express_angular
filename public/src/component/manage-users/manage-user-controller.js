angular.module('myApp')
  .controller('manageUserCtrl', function($scope, $http) { 'use strict';
    $scope.title = "Trang Manage User"

    /*
    $scope.getListUsers = function(){ 
      $http.get('/user').then(function(result) { 
        $scope.listUsers = result.data; 
      }); 
    } 
    $scope.getListUsers(); 
    */

    $scope.refreshUsers = function() {
      var current = this;
      $http.get('/user').then(function(result) {
         $scope.listUsers = current.calAge(result.data);
      });
    }
})

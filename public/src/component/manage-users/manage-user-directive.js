angular.module('myApp')
  .directive('drtManageUser', function() { 'use strict';
    return {
      restrict: 'E',
      templateUrl: 'component/manage-users/manage-user-template.html',
      controller: 'manageUserCtrl',
      controllerAs: 'ctrl',

      scope: {
        listUsers: '='
      },
      
      link: function(ctrl) {
        ctrl.calAge = function(users) {
          var current=new Date().getFullYear();
          users.forEach(function(u) {
            u.age = current - (new Date(u.birthday)).getFullYear();
          });
          return users;
        }
        ctrl.listUsers = ctrl.calAge(ctrl.listUsers);
      }
    };
  });

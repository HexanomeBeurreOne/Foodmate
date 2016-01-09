'use strict';


angular.module('ProfileController', [])

.controller('ProfileCtrl', function ($scope, $rootScope, $http, $state) {
  $scope.viewName = "Profil";

  $scope.details = $rootScope.profile["details"];
  $scope.dataRegimes = $rootScope.profile["regimes"];
  $scope.dataRestos = $rootScope.profile["restaurants"];

  $scope.doLogout = function() {
    $rootScope.logged = false;
    $state.go('app.invitations-list');
  };

});

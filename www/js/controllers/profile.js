'use strict';


angular.module('ProfileController', [])

.controller('ProfileCtrl', function ($scope, $rootScope) {
  $scope.viewName = "Profil";
  $scope.prefRegime = true;
  $scope.prefResto = false;

  

  $scope.afficherRegime = function() {
    $scope.prefRegime = true;
    $scope.prefResto = false;
  };

  $scope.afficherResto = function() {
    $scope.prefRegime = false;
    $scope.prefResto = true;
  };
});

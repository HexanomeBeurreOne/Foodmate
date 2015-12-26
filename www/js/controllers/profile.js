'use strict';


angular.module('ProfileController', [])

.controller('ProfileCtrl', function ($scope, $rootScope, $http) {
  $scope.viewName = "Profil";
  $scope.prefRegime = true;
  $scope.prefResto = false;

  if (!$rootScope.choixRegime) {
    $rootScope.choixRegime = {};
  }

  if (!$rootScope.choixResto) {
    $rootScope.choixResto = {};
  }

  $http.get('data/restaurants.json')
  .success(function(data) {
    $scope.dataRestos = data.restaurants;
  })
  .error(function(err) {
    alert("Failed reading restaurants.json");
  });

  $http.get('data/regime.json')
  .success(function(data) {
    $scope.dataRegimes = data.regimes;
  })
  .error(function(err) {
    alert("Failed reading restaurants.json");
  });

  $scope.afficherRegime = function() {
    $scope.prefRegime = true;
    $scope.prefResto = false;
  };

  $scope.afficherResto = function() {
    $scope.prefRegime = false;
    $scope.prefResto = true;
  };
});

'use strict';


angular.module('ProfileController', [])

.controller('ProfileCtrl', function ($scope, $rootScope, $http) {
  $scope.viewName = "Profil";
  $scope.prefRegime = true;
  $scope.prefResto = false;

  $http.get('data/restaurants.json')
  .success(function(data) {
    $scope.dataRestos = data.restaurants;
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

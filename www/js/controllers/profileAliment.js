'use strict';


angular.module('ProfileAlimentController', [])

.controller('ProfileAlimentCtrl', function ($scope, $rootScope, $http, $state) {
  $scope.viewName = "Préférences alimentaires";

  $http.get('data/profile.json')
  .success(function(data) {
    $scope.dataRegimes = data.regimes;
    $scope.dataRestos = data.restaurants;
  })
  .error(function(err) {
    alert("Failed reading restaurants.json");
  });

});

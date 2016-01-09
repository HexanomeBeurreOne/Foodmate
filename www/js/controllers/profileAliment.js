'use strict';


angular.module('ProfileAlimentController', [])

.controller('ProfileAlimentCtrl', function ($scope, $rootScope, $http, $state) {
  $scope.viewName = "Préférences alimentaires";

  $scope.dataRegimes = $rootScope.profile.regimes;
  $scope.dataRestos = $rootScope.profile.restaurants;

});

'use strict';


angular.module('ProfileRestauController', [])

.controller('ProfileRestauCtrl', function ($scope, $rootScope, $http, $state) {
  $scope.viewName = "Restaurants préférés";

  $scope.dataRegimes = $rootScope.profile.regimes;
  $scope.dataRestos = $rootScope.profile.restaurants;

});

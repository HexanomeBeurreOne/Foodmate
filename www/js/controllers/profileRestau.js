'use strict';


angular.module('ProfileRestauController', [])

.controller('ProfileRestauCtrl', function ($scope, $rootScope, $http, $state) {
  $scope.viewName = "Restaurants préférés";

  $http.get('data/profile.json')
  .success(function(data) {
    $scope.dataRegimes = data.regimes;
    $scope.dataRestos = data.restaurants;
  })
  .error(function(err) {
    alert("Failed reading restaurants.json");
  });

});

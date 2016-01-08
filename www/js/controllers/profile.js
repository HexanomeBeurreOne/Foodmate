'use strict';


angular.module('ProfileController', [])

.controller('ProfileCtrl', function ($scope, $rootScope, $http, $state) {
  $scope.viewName = "Profil";

  $http.get('data/profile.json')
  .success(function(data) {
    $scope.details = data.details;
    $scope.dataRegimes = data.regimes;
    $scope.dataRestos = data.restaurants;
  })
  .error(function(err) {
    alert("Failed reading restaurants.json");
  });

  $scope.doLogout = function() {
    $rootScope.logged = false;
    $state.go('app.invitations-list');
  };

});

'use strict';


angular.module('ProfileRestauController', [])

.controller('ProfileRestauCtrl', function ($scope, $rootScope, $http, $state) {
  $scope.viewName = "Restaurants préférés";

  //$scope.dataRegimes = $rootScope.profile.regimes;
  $scope.dataRestos = $rootScope.profile.restaurants;

  $scope.saveSettings = function(){
  	$state.go("app.profile");
  };

  $scope.toggleChecked = function(parentIndex,index) {
  	console.log(index, $rootScope.profile.restaurants);
  	if ($rootScope.profile.restaurants[parentIndex].nom[index].checked === false) {
  		$rootScope.profile.restaurants[parentIndex].nom[index].checked = true;
  	}
  	else {
  		$rootScope.profile.restaurants[parentIndex].nom[index].checked = false;
  	};
  };



});

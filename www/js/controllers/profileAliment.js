'use strict';


angular.module('ProfileAlimentController', [])

.controller('ProfileAlimentCtrl', function ($scope, $rootScope, $http, $state) {
  $scope.viewName = "Préférences alimentaires";

  $scope.dataRegimes = $rootScope.profile.regimes;

  $scope.saveSettings = function(){
  	$state.go("app.profile");
  };

  $scope.toggleChecked = function($index) {
  	if ($rootScope.profile.regimes[$index].checked === false) {
  		$rootScope.profile.regimes[$index].checked = true;
  	}
  	else {
  		$rootScope.profile.regimes[$index].checked = false;
  	};
  };

});

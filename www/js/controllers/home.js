'use strict';


angular.module('HomeController', [])

    .controller('HomeCtrl', function ($scope, $rootScope, $ionicHistory) {
      $scope.viewName= "Foodmate Home";

      $ionicHistory.nextViewOptions({
	    disableBack: true
	  });
    });

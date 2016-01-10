'use strict';


angular.module('ChoixRestosController', [])

.controller('ChoixRestosCtrl', function ($scope, $rootScope) {
	$scope.viewName= "Choix restos";

	console.log($rootScope.currentMealId);
	$scope.restos = $rootScope.restos;
	$scope.currentMealId = $rootScope.currentMealId;

	$scope.selectResto = function(resto){
		$scope.chosen = true;
		console.log("selected",resto);
	};

	$scope.unselectResto = function(resto){
		$scope.chosen = false;
		console.log("unselected",resto);
	};
});
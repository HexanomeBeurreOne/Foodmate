'use strict';


angular.module('ChoixRestosController', [])

.controller('ChoixRestosCtrl', function ($scope, $rootScope, $timeout) {
	$scope.viewName= "Choix restos";

	$scope.restos = $rootScope.restos;
	$scope.currentMealId = $rootScope.currentMealId;

	// si chosenResto n'existe pas dans le rootScope
	if(!$rootScope.chosenResto) {
		$rootScope.chosenResto = [];
		$rootScope.chosenResto[$scope.currentMealId] = [];
		$scope.chosenResto = [];
		$scope.chosenResto[$scope.currentMealId] = [];
	}
	// si chosenResto[$scope.currentMealId] n'existe pas dans le rootScope
	else if(!$rootScope.chosenResto[$scope.currentMealId]) {
		$rootScope.chosenResto[$scope.currentMealId] = [];
		$scope.chosenResto = [];
		$scope.chosenResto[$scope.currentMealId] = [];
	} 
	// sinon
	else {
		$scope.chosenResto = [];
		$scope.chosenResto[$scope.currentMealId] = $rootScope.chosenResto[$scope.currentMealId];
	}

/*	$scope.chosen = function(resto, $index){
		console.log("chosen", resto, $scope.chosenResto[$scope.currentMealId][$index]);
		var restoIndex = $scope.chosenResto[$scope.currentMealId].indexOf(resto);
		if(restoIndex!=-1){
			console.log("in if chosen");
			//angular.element($scope.).toggleClass("ion-ios-circle-outline ion-ios-checkmark balanced");	
		}

	};*//*
	$scope.selectChosen = function() {
		for(var i=0; i<$scope.chosenResto[$scope.currentMealId].length; i++){
			var restoId = 'resto-'+$scope.chosenResto[$scope.currentMealId][i];
			angular.element(document.getElementById(restoId)).append("<h1>TEST</h1>");//toggleClass("ion-ios-circle-outline ion-ios-checkmark balanced");
		};
	}
	
*/

	// change l'icone de selection d'un resto
	$scope.toggleSelectResto = function(resto, $event){
		angular.element($event.currentTarget).toggleClass("ion-ios-circle-outline ion-ios-checkmark balanced");	
		var restoIndex = $scope.chosenResto[$scope.currentMealId].indexOf(resto);
		if(restoIndex==-1){
			$scope.chosenResto[$scope.currentMealId].push(resto);
		} else {
			$scope.chosenResto[$scope.currentMealId].splice(restoIndex, 1);
		}
		$rootScope.chosenResto[$scope.currentMealId] = $scope.chosenResto[$scope.currentMealId];
		
		if($rootScope.chosenResto[$scope.currentMealId].length == 0) {
			$rootScope.chosenResto.splice($scope.currentMealId,1);
		}

	};

	// permet de flip la card
	$scope.flip = function($event) {
		angular.element($event.currentTarget).toggleClass("flip");
	};

	

});
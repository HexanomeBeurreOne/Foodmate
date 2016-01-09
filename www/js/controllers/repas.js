'use strict';


angular.module('RepasController', [])

.controller('RepasCtrl', ['$scope', '$rootScope', '$http', '$state', '$stateParams', function ($scope, $rootScope, $http, $state, $stateParams) {

	$scope.viewName= "Repas";
	$rootScope.currentMealId = $stateParams.id;
	$scope.currentMealId = $rootScope.currentMealId;

	// Récupération des restaurants
	$scope.restos = $rootScope.restos;

	// Récupération du repas
	$scope.repas = $rootScope.repas[$rootScope.currentMealId];

	// Récupération des contacts
	$scope.contacts = $rootScope.contacts;

	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		// on récupère le restaurant le plus selectionné par l'utilisateur
		$scope.selectedResto = $rootScope.selectedResto ? $rootScope.selectedResto[0].restoName : "Aucun restaurant selectionné";
	});


	//Fonction d'ajout d'un ami au repas
	$scope.addNewFriendToMeal = function() {
		$rootScope.currentMealId = $scope.currentMealId;
		$rootScope.mealModification = true;
		$state.go('app.friends');
	};

}]);

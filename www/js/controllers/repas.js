'use strict';


angular.module('RepasController', [])

    .controller('RepasCtrl', function ($scope, $rootScope, $http, $state) {
      $scope.viewName= "Repas";
      $rootScope.currentMealId = 0;
      $scope.currentMealId = $rootScope.currentMealId;

      // Recuperation des restaurants
	    $http.get('data/restos.json')
			.success(function(data) {
				$scope.restos = data.restos;
			})
			.error(function(err) {
				alert("Failed reading chosenRestaurants.json")
		});

		// Recuperation du repas
	    $http.get('data/repas.json')
			.success(function(data) {
				$scope.repas = data.repas;
				$rootScope.repas = $scope.repas;
			})
			.error(function(err) {
				alert("Failed reading repas.json")
		});

		// Recuperation des contacts
	    $http.get('data/contacts.json')
			.success(function(data) {
				$scope.contacts = data.contacts;
			})
			.error(function(err) {
				alert("Failed reading contacts.json")
		});

		//Fonction d'ajout d'un ami au repas
		$scope.addNewFriendToMeal = function() {
			$rootScope.currentMealId = 0;
			$rootScope.mealModification = true;
			$state.go('app.friends');
		};
    });

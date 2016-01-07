'use strict';


angular.module('RepasController', [])

    .controller('RepasCtrl', ['$scope', '$rootScope', '$http', '$stateParams', function ($scope, $rootScope, $http, $stateParams) {
      $scope.viewName= "Repas";

      $rootScope.currentMealId = $stateParams.id;
      $scope.currentMealId = $rootScope.currentMealId;

      // Creations du classement fictifs
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
  }]);

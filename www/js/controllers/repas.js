'use strict';


angular.module('RepasController', [])

.controller('RepasCtrl', ['$scope', '$rootScope', '$http', '$state', '$stateParams', function ($scope, $rootScope, $http, $state, $stateParams) {

	$scope.viewName= "Repas";
	$rootScope.currentMealId = $stateParams.id;
	$scope.currentMealId = $rootScope.currentMealId;

	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		if($rootScope.chosenResto) {
			if($rootScope.chosenResto[$scope.currentMealId]) {
				$scope.chosenResto = "";
				for (var i = 0; i < $rootScope.chosenResto[$scope.currentMealId].length; i++) {
					$scope.chosenResto += $rootScope.chosenResto[$scope.currentMealId][i] + ', ';
				}
				$scope.chosenResto = $scope.chosenResto.slice(0,$scope.chosenResto.length-2);
			} else {
				$scope.chosenResto = "Choisir vos restaurants";
			}
		} else {
			$scope.chosenResto = "Choisir vos restaurants";
		}

		if($scope.chosenResto.length == 0) $scope.chosenResto = "Choisir vos restaurants";
	});
	

	// Récupération des restaurants
	$scope.restos = $rootScope.restos;

	// Récupération du repas
	$scope.repas = $rootScope.repas[$rootScope.currentMealId];

		console.log($scope.repas.mealTime);

	// Récupération des contacts
	$scope.contacts = $rootScope.contacts;

	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		// on récupère le restaurant le plus selectionné par l'utilisateur
		$scope.selectedResto = $rootScope.selectedResto ? $rootScope.selectedResto[0].restoName : "Aucun restaurant selectionné";
	});

	$scope.responseMeal = function (response) {
		$scope.repas.pending = false;
		$scope.repas.going = response;
	};

	$scope.waitMeal = function () {
		$scope.repas.pending = true;
		$scope.repas.going = null;
	};

	//Fonction d'ajout d'un ami au repas
	$scope.addNewFriendToMeal = function() {
		$rootScope.currentMealId = $scope.currentMealId;
		$rootScope.mealModification = true;
		$state.go('app.friends');
	};

	$scope.getTime = function (UNIX_timestamp){
      var time = {};
      var a = new Date(UNIX_timestamp * 1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      time.year = a.getFullYear();
      time.month = months[a.getMonth()];
      time.date = a.getDate();
      time.hour = a.getHours();
      time.min = a.getMinutes();
      time.sec = a.getSeconds();
      return time;
    };

	$scope.getFullDateTime = function (timestamp) {
      var time = $scope.getTime(timestamp);
      return time.date + " " + time.month + " " + time.year + ' | ' + time.hour + ":" + time.min;
    };

}]);

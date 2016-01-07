'use strict';


angular.module('RepasController', [])

    .controller('RepasCtrl', function ($scope, $rootScope, $http, $location, $ionicNavBarDelegate) {

    	var path = $location.path();
       if (path.indexOf('list-invitations') != -1)
         $ionicNavBarDelegate.showBackButton(false);
       else
         $ionicNavBarDelegate.showBackButton(true);


      $scope.viewName= "Repas";

      // Creations du classement fictifs
	    $http.get('data/chosenRestaurants.json')
			.success(function(data) {
				$scope.chosenRestaurants = data.chosenRestaurants;
			})
			.error(function(err) {
				alert("Failed reading chosenRestaurants.json")
			});

		// Creations des amis fictifs du repas
	    $http.get('data/mealFriends.json')
			.success(function(data) {
				$scope.mealFriends = data.mealFriends;
			})
			.error(function(err) {
				alert("Failed reading mealFriends.json")
			});
    });

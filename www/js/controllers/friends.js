'use strict';


angular.module('FriendsController', [])

    .controller('FriendsCtrl', function ($scope, $rootScope, $http) {


	    $http.get('data/contacts.json')
			.success(function(data) {
				$scope.contacts = data.contacts;
			})
			.error(function(err) {
				alert("Failed reading contacts.json")
			});



		//Fonction permettant de changer l'icon ajout/suppr d'un contact
		  $scope.switchContactIcon = function($index) {
		  	$scope.test = $index;
		    if ($scope.contacts[$index].contactIcon == "ion-plus-circled")
		    {
		      $scope.contacts[$index].contactIcon = "ion-checkmark-circled";
		      $scope.contacts[$index].buttonColor = 'green';
		      // on annule l'interval updateTimerInterval si on appuie sur pause
		      $interval.cancel(updateTimerInterval);
		    }
		    else 
		    {
		      $scope.contacts[$index].contactIcon = "ion-plus-circled";
		      $scope.contacts[$index].buttonColor = 'grey';
		      // on instancie un $interval que l'on nomme updateTimerInterval qui va appeler la fonction updateInterval toutes les 100ms
		      updateTimerInterval = $interval(updateTimer,100);
		    }
		    
		  };

    });
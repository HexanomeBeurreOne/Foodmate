'use strict';


angular.module('FriendsController', [])

    .controller('FriendsCtrl', function ($scope, $rootScope, $http) {
    	//Creation de groupes fictifs
    	$http.get('data/friendGroups.json')
			.success(function(data) {
				$scope.groups = data.groups;
			})
			.error(function(err) {
				alert("Failed reading friendGroups.json")
			});

    	// Creations de d'amis fictifs
	    $http.get('data/contacts.json')
			.success(function(data) {
				$scope.contacts = data.contacts;
			})
			.error(function(err) {
				alert("Failed reading contacts.json")
			});



		//Fonction permettant de changer l'icon ajout/suppr d'un contact
		$scope.switchContactIcon = function($index) {
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

		//Fonction d'ajout d'un groupe d'amis
		$scope.addGroup = function() {
			//TODO
			alert("Ajout groupe!");

		};

		//Fonction d'ajout d'un ami
		$scope.addFriend = function() {
			//TODO
			alert($scope.query);

		};

    });
    
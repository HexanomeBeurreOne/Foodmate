'use strict';


angular.module('FriendsController', [])

    .controller('FriendsCtrl', function ($scope, $rootScope, $http) {
    	//Creation de groupes fictifs
    	$http.get('data/profile.json')
			.success(function(data) {
				$scope.groups = data.groups;
			})
			.error(function(err) {
				alert("Failed reading profile.json")
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
		    	//contact pas encore selectionne
		    {
		      $scope.contacts[$index].contactIcon = "ion-checkmark-circled";
		      $scope.contacts[$index].buttonColor = 'green';
		      // on annule l'interval updateTimerInterval si on appuie sur pause
		      $interval.cancel(updateTimerInterval);
		    }
		    else 
		    	//deja selectionne -> on deselectionne
		    {
		      $scope.contacts[$index].contactIcon = "ion-plus-circled";
		      $scope.contacts[$index].buttonColor = 'grey';
		      // on instancie un $interval que l'on nomme updateTimerInterval qui va appeler la fonction updateInterval toutes les 100ms
		      updateTimerInterval = $interval(updateTimer,100);
		    }
		    
		};

		//Fonction d'ajout d'un groupe d'amis
		$scope.selectGroup = function(members) {
			var allSelected = true;
			//On essaye de tout selectionner pour le groupe
			for (var i = 0;i <= members.length - 1; i++) {
				if ($scope.contacts[members[i].id].contactIcon == "ion-plus-circled")
					//non selectionne
		    	{
		    		allSelected = false;
		    		$scope.contacts[members[i].id].contactIcon = "ion-checkmark-circled";
		      		$scope.contacts[members[i].id].buttonColor = 'green';
		    	}
			};

			//Si tout est deja selectionne, on deselectionne tout
			if (allSelected == true)
			{
				for (var i = 0;i <= members.length - 1; i++) 
				{
		    		$scope.contacts[members[i].id].contactIcon = "ion-plus-circled";
		      		$scope.contacts[members[i].id].buttonColor = 'grey';
				};
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
    
    
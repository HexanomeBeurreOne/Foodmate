'use strict';


angular.module('FriendsController', [])

.controller('FriendsCtrl', function ($scope, $rootScope, $http, $state) {
	$scope.mealModification = $rootScope.mealModification;
	$scope.currentMealId = $rootScope.currentMealId;

	//Creation de groupes fictifs
	$scope.groups = $rootScope.profile.groups;

	// Creations de d'amis fictifs
	$scope.contacts = $rootScope.contacts;

	// init friends
	$scope.friends = [];

	if ($scope.mealModification === true) {
		/* ************ Certains amis sont déjà ajoutés !!! *************** */
		$scope.friends = $rootScope.repas[$scope.currentMealId].friendsId;
		for (var i = 0; i < $scope.friends.length; i++) {
			console.log($scope.friends[i]);
			$scope.contacts[$scope.friends[i]].contactIcon = "ion-checkmark-circled";
			$scope.contacts[$scope.friends[i]].buttonColor = 'green';
			$scope.contacts[$scope.friends[i]].disable = true;
		};
	};


	/* ******************** DATE DU JOUR *************************** */
	$scope.date = new Date();
	$scope.date.setHours(12);
	$scope.date.setMinutes(0);
	$scope.date.setSeconds(0);
	$scope.date.setMilliseconds(0);

	//Fonction permettant de changer l'icon ajout/suppr d'un contact
	$scope.switchContactIcon = function($index) {
		if ($scope.contacts[$index].contactIcon === "ion-plus-circled")
	    	//contact pas encore selectionne
	    {
	    	// Affichage
	    	$scope.contacts[$index].contactIcon = "ion-checkmark-circled";
	    	$scope.contacts[$index].buttonColor = 'green';

			// Ajout a la liste
			$scope.friends.push($index);
			console.log($scope.friends);
		}
		else 
	    	//deja selectionne -> on deselectionne
	    {
	    	// Affichage
	    	$scope.contacts[$index].contactIcon = "ion-plus-circled";
	    	$scope.contacts[$index].buttonColor = 'grey';

			//Retret liste
			var indexRemove = $scope.friends.indexOf($index);

			if (indexRemove > -1) {
				$scope.friends.splice(indexRemove, 1);
			}
		}

	};

	//Fonction d'ajout d'un groupe d'amis
	$scope.selectGroup = function(members) {
		var allSelected = true;
		//On essaye de tout selectionner pour le groupe
		for (var i = 0;i <= members.length - 1; i++) {
			if ($scope.contacts[members[i].id].contactIcon === "ion-plus-circled")
				//non selectionne
			{
	    		// Affichage
	    		allSelected = false;
	    		$scope.contacts[members[i].id].contactIcon = "ion-checkmark-circled";
	    		$scope.contacts[members[i].id].buttonColor = 'green';

	      		// Ajout a la liste
	      		$scope.friends.push(members[i].id);
	      		
	      	}
	      };

		//Si tout est deja selectionne, on deselectionne tout
		if (allSelected == true)
		{
			for (var i = 0;i <= members.length - 1; i++) 
			{
				//Affichage
				$scope.contacts[members[i].id].contactIcon = "ion-plus-circled";
				$scope.contacts[members[i].id].buttonColor = 'grey';

	      		//Retret liste
	      		var indexRemove = $scope.friends.indexOf(members[i].id);

	      		if (indexRemove > -1) {
	      			$scope.friends.splice(indexRemove, 1);
	      		}
	      	};
	      }
	  };

	//Fonction d'ajout d'un groupe d'amis
	/*$scope.addGroup = function() {
		//TODO
		alert("Ajout groupe!");

	};*/

	//Fonction d'ajout d'un ami
	/*$scope.addFriend = function() {
		//TODO
		alert($scope.query);

	};*/

	//Rooting vers repas
	$scope.goToRepas = function() {
		$state.go('app.repas',{id: $scope.currentMealId});

		// TODO : pb modif rootScope.repas 
		$rootScope.repas[$scope.currentMealId].friendsId = $scope.friends;
	};

});

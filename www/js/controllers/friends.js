'use strict';


angular.module('FriendsController', [])

.controller('FriendsCtrl', function ($scope, $rootScope, $http, $state) {
	$scope.mealModification = $rootScope.mealModification;
	$scope.currentMealId = $rootScope.currentMealId;

	//Creation de groupes fictifs
	$scope.groups = $rootScope.profile.groups;

	// Creations de d'amis fictifs
	$scope.contacts = $rootScope.contacts;


	// si chosenResto n'existe pas dans le rootScope
	if(!$rootScope.friends) {
		$rootScope.friends = [];
		$rootScope.friends[$scope.currentMealId] = [];
		$scope.friends = [];
		$scope.friends[$scope.currentMealId] = [];
	}
	// si friends[$scope.currentMealId] n'existe pas dans le rootScope
	else if(!$rootScope.friends[$scope.currentMealId]) {
		$rootScope.friends[$scope.currentMealId] = [];
		$scope.friends = [];
		$scope.friends[$scope.currentMealId] = [];
	} 
	// sinon
	else {
		$scope.friends = [];
		$scope.friends[$scope.currentMealId] = $rootScope.friends[$scope.currentMealId];
	}


	if ($scope.mealModification === true) {
		/* ************ Certains amis sont déjà ajoutés !!! *************** */
		$scope.friends[$scope.currentMealId] = $rootScope.repas[$scope.currentMealId].friendsId;
		for (var i = 0; i < $scope.contacts.length; i++) {
			$scope.contacts[i].contactIcon = "ion-plus-circled";
			$scope.contacts[i].buttonColor = "grey";
			$scope.contacts[i].disable = false;
		};
		for (var i = 0; i < $scope.friends[$scope.currentMealId].length; i++) {
			$scope.contacts[$scope.friends[$scope.currentMealId][i]].contactIcon = "ion-checkmark-circled";
			$scope.contacts[$scope.friends[$scope.currentMealId][i]].buttonColor = 'green';
			$scope.contacts[$scope.friends[$scope.currentMealId][i]].disable = true;
		};
		console.log($rootScope.friends[$scope.currentMealId]);
		$rootScope.friends[$scope.currentMealId] = $scope.friends[$scope.currentMealId];
		$rootScope.repas[$scope.currentMealId].friendsId = $scope.repas[$scope.currentMealId].friendsId;
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
			$scope.friends[$scope.currentMealId].push($index);
		}
		else 
	    	//deja selectionne -> on deselectionne
	    {
	    	// Affichage
	    	$scope.contacts[$index].contactIcon = "ion-plus-circled";
	    	$scope.contacts[$index].buttonColor = 'grey';

			//Retret liste
			var indexRemove = $scope.friends[$scope.currentMealId].indexOf($index);

			if (indexRemove > -1) {
				$scope.friends[$scope.currentMealId].splice(indexRemove, 1);
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
	      		$scope.friends[$scope.currentMealId].push(members[i].id);
	      		
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
	      		var indexRemove = $scope.friends[$scope.currentMealId].indexOf(members[i].id);

	      		if (indexRemove > -1) {
	      			$scope.friends[$scope.currentMealId].splice(indexRemove, 1);
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
		$rootScope.repas[$scope.currentMealId].friendsId = $scope.friends[$scope.currentMealId];
	};

	$scope.createMeal = function() {
		var newDate = angular.element(document.getElementById("exampleInput")).val();
		var timeStamp = new Date(newDate).getTime()/1000 - 3600;
		$rootScope.repas.push({"id" : $rootScope.repas.length,"mealTime" : timeStamp,"friendsId" : $scope.friends[$scope.currentMealId],"hostId" : 1,"pending" : true,"going" : null,"chosenRestaurants" : [{"id" : 0,"rank" : 1,"votes" : 3},{"id" : 1,"rank" : 3,"votes" : 1},{"id" : 2,"rank" : 2,"votes" : 1}]});
		$state.go('app.invitations-list');
	}
});

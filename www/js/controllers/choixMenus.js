'use strict';


angular.module('ChoixMenusController', [])

    .controller('ChoixMenusCtrl', function ($scope, $rootScope, $http, $compile) {
      $scope.viewName= "Choix menus";

	// Génération des restos et menus
	$http.get('data/restos.json')
		.success(function(data) {

			// on récupère les données du json restos.json dans une variable restos
			var restos = data.restos;

			// on instancie un compteur pour les menus
			var compteurMenus = 0;

			// on instancie un compteur pour les restos
			var compteurRestos = 0;

			// boucle pour chaque resto dans restos
			angular.forEach(restos, function(resto, key1) {


				/****************************************************************************************
													ONGLET RESTAURANTS
				****************************************************************************************/

				// on définit un identifiant de la balise div dont la classe est row selon le compteur de restos afin de pouvoir la récupérer plus tard
			 	var rowRestoId = "row-resto-"+compteurRestos;

				if (compteurRestos%2==0) {
	
					var restoCardRow = "<div class='row responsive-sm' id="+rowRestoId+"><div class='col col-50'><div class='card'><div class='item item-text-wrap background-center' style='background-image:url("+resto.picture+")' ng-click='toggleSelect($event)' data-resto="+resto.name+" data-selected='0'></div><div class='item item-divider text-center color-white' style=background-color:"+resto.color+">"+resto.name+"</div></div>";

					angular.element(document.getElementById('restos-container')).append($compile(restoCardRow)( $scope ));
				} 
				// si le compteur est IMPAIRE on ajoute seulement l'ensemble du html pour représenter une card de resto
				else {
					// on recrée l'id de la dernière div.row
					var lastRestoIndex = compteurRestos-1;
					var previousRowRestoId = "row-resto-"+lastRestoIndex;

					// après avoir récupérè la dernière div.row (grâce à l'id recréé précédemment) on ajoute l'ensemble du html pour représenter une card de resto

					var restoCard = "<div class='col col-50'><div class='card'><div class='item item-text-wrap background-center' style='background-image:url("+resto.picture+")' ng-click='toggleSelect($event)' data-resto="+resto.name+" data-selected='0'></div><div class='item item-divider text-center color-white' style=background-color:"+resto.color+">"+resto.name+"</div>";

					angular.element(document.getElementById(previousRowRestoId)).append($compile(restoCard)( $scope ));
				};

				compteurRestos++;

				
				// on récupère l'ensemble des menus d'un resto
				var menus = resto.menus;

				// boucle pour chaque menu dans menus
			 	angular.forEach(menus, function(menu, key2) {

			 	/****************************************************************************************
													ONGLET MENUS
				****************************************************************************************/

			 		// on définit un identifiant de la balise div dont la classe est row selon le compteur de menus afin de pouvoir la récupérer plus tard
			 		var rowMenuId = "row-menu-"+compteurMenus;

			 		// si le compteur est PAIRE on ajoute une div avec la classe row ET l'ensemble du html pour représenter une card de menu
			 		if (compteurMenus%2==0) {

			 			var menuCardRow = "<div class='row responsive-sm' id="+rowMenuId+"><div class='col col-50'><div class='card'><div class='item item-text-wrap background-center' style='background-image:url("+menu.picture+")' ng-click='toggleSelect($event)' data-resto="+resto.name+" data-selected='0'><span class='price'>"+menu.price+" €</span></div><div class='item item-divider text-center color-white' style=background-color:"+resto.color+">"+menu.name+"</div></div>";

						angular.element(document.getElementById('menus-container')).append($compile(menuCardRow)( $scope ));
					} 
					// si le compteur est IMPAIRE on ajoute seulement l'ensemble du html pour représenter une card de menu
					else {
						// on recrée l'id de la dernière div.row
						var lastMenuIndex = compteurMenus-1;
						var previousRowMenuId = "row-menu-"+lastMenuIndex;

						var menuCard = "<div class='col col-50'><div class='card'><div class='item item-text-wrap background-center' style='background-image:url("+menu.picture+")' ng-click='toggleSelect($event)' data-resto="+resto.name+" data-selected='0'><span class='price'>"+menu.price+" €</span></div><div class='item item-divider text-center color-white' style=background-color:"+resto.color+">"+menu.name+"</div>";

						// après avoir récupérè la dernière div.row (grâce à l'id recréé précédemment) on ajoute l'ensemble du html pour représenter une card de menu
						angular.element(document.getElementById(previousRowMenuId)).append($compile(menuCard)( $scope ));
					};

					// on incrémente le compteur de menus
					compteurMenus++;
			 	})
			});

		})
		.error(function(err) {

			// on affiche si une erreur est apparue lors de l'ouverture du JSON
			console.log("Failed reading restos.json");
			angular.element(document.getElementById('menus-container')).append("<h2>Une erreur est survenue</h2>");
		});

		
		$scope.selectedResto = [];

		//var selectedCount = 0;

		$scope.toggleSelect = function($event) {
			angular.element($event.currentTarget).toggleClass("custom-overlay icon ion-checkmark-circled");
			/*var restoName = $event.currentTarget.getAttribute("data-resto");
			var alreadySelected = $event.currentTarget.getAttribute("data-selected");

			if ($scope.selectedResto.length == 0) {
				$scope.selectedResto.push({restoName, nbSelected:1});
				$event.currentTarget.setAttribute("data-selected", 1);
			} else {
				for (var i = 0; i < $scope.selectedResto.length; i++) {
					var newResto = false;
					if($scope.selectedResto[i].restoName == restoName && alreadySelected==0) {
						//console.log("déjà selectionné");
						$scope.selectedResto[i].nbSelected++;
						$event.currentTarget.setAttribute("data-selected", 1);
					} else if($scope.selectedResto[i].restoName == restoName && alreadySelected==1){
						//console.log("nouveau selectionné");
						$scope.selectedResto[i].nbSelected--;
						$event.currentTarget.setAttribute("data-selected", 0);
					} else if( $scope.selectedResto[i].restoName != restoName ) newResto = true;
				};
				if (newResto) {
					$scope.selectedResto.push({restoName, nbSelected:1});
					$event.currentTarget.setAttribute("data-selected", 1);
				}
			}

			console.log( JSON.stringify($scope.selectedResto));*/
		}

 });

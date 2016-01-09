'use strict';


angular.module('ChoixMenusController', [])

.controller('ChoixMenusCtrl', function ($scope, $rootScope, $http, $compile, $state) {
	$scope.viewName= "Choix menus";

	// on récupère les données du json restos.json dans une variable restos
	var restos = $rootScope.restos;

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

	// on créé un tableau vide qui va stocker l'ensemble des restaurants séléctionnés
	$scope.selectedResto = [];

	$scope.toggleSelect = function($event) {

		// on ajoute ou enlève les classes css pour affichage de la selection
		angular.element($event.currentTarget).toggleClass("custom-overlay icon ion-checkmark-circled");

		// on récupère le nom du restaurant qui correspond à la card séléctionnée
		var restoName = $event.currentTarget.getAttribute("data-resto");

		// on récupère la valeur du booléen qui indique si la card est déjà séléctionné
		var alreadySelected = $event.currentTarget.getAttribute("data-selected");

		// si le tableau est vide
		if ($scope.selectedResto.length == 0) {

			// on ajoute dans le tableau le nom du restaurant et on définit son nombre de sélection à 1
			$scope.selectedResto.push({restoName, nbSelected:1});

			// on définit la card à l'état sélectionné (booléen true --> 1)
			$event.currentTarget.setAttribute("data-selected", 1);

		} // si le tableau n'est pas vide
		else { 

			// on instancie un booléen à vrai pour savoir s'il s'agit d'un resto qui n'a pas encore été ajouté dans le tableau
			var newResto = true;

			// pour chaque élément du tableau {nomResto, nbSelection}
			for (var i = 0; i < $scope.selectedResto.length; i++) {

				// si le resto selectionné est déjà dans le tableau et que la card N'A PAS été séléctionné
				if($scope.selectedResto[i].restoName == restoName && alreadySelected==0) {

					// on incrémente le nb de selection correspondant à ce resto
					$scope.selectedResto[i].nbSelected++;

					// on définit le booléen de la card sélectionnée à true (1)
					$event.currentTarget.setAttribute("data-selected", 1);

					// on indique qu'il ne s'agit pas d'un nouveau restaurant
					newResto = false;

				} // si le resto selectionné est déjà dans le tableau et que la card A ETE séléctionné
				else if($scope.selectedResto[i].restoName == restoName && alreadySelected==1){

					// on décrémente le nb de selection correspondant à ce resto
					$scope.selectedResto[i].nbSelected--;

					// on définit le booléen de la card sélectionnée à false (0)
					$event.currentTarget.setAttribute("data-selected", 0);

					// on indique qu'il ne s'agit pas d'un nouveau restaurant
					newResto = false;
				}

				// si le nb de selection d'un élément du tableau est nul
				if($scope.selectedResto[i].nbSelected == 0) {

					// on retire cet élément du tableau
					$scope.selectedResto.splice(i, 1);
				}

			};

			// s'il s'agit d'un nouveau restaurant
			if (newResto) {

				// on ajoute dans le tableau le nom du restaurant et on définit son nombre de sélection à 1
				$scope.selectedResto.push({restoName, nbSelected:1});

				// on définit la card à l'état sélectionné (booléen true --> 1)
				$event.currentTarget.setAttribute("data-selected", 1);
			}
		}

		// on trie le tableau dans l'ordre décroissant du nombre de selections par resto
		$scope.selectedResto.sort(function(a, b) {
			return b.nbSelected - a.nbSelected;
		});

		$rootScope.selectedResto = $scope.selectedResto;

		//console.log( JSON.stringify($scope.selectedResto));
	}

	$scope.valider = function() {
		$state.go('app.repas',{id: $rootScope.lastMealIndex});
	}

});

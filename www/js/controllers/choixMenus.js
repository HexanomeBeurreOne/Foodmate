'use strict';


angular.module('ChoixMenusController', [])

    .controller('ChoixMenusCtrl', function ($scope, $rootScope, $http) {
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
					angular.element(document.getElementById('restos-container')).append("<div class='row responsive-sm' id="+rowRestoId+"><div class='col col-50'><div class='card'><div class='item item-text-wrap background-center' style='background-image:url("+resto.picture+")'></div><div class='item item-divider text-center color-white' style=background-color:"+resto.color+">"+resto.name+"</div></div>");
				} 
				// si le compteur est IMPAIRE on ajoute seulement l'ensemble du html pour représenter une card de resto
				else {
					// on recrée l'id de la dernière div.row
					var lastRestoIndex = compteurRestos-1;
					var previousRowRestoId = "row-resto-"+lastRestoIndex;

					// après avoir récupérè la dernière div.row (grâce à l'id recréé précédemment) on ajoute l'ensemble du html pour représenter une card de resto
					angular.element(document.getElementById(previousRowRestoId)).append("<div class='col col-50'><div class='card'><div class='item item-text-wrap background-center' style='background-image:url("+resto.picture+")'></div><div class='item item-divider text-center color-white' style=background-color:"+resto.color+">"+resto.name+"</div>");
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
						angular.element(document.getElementById('menus-container')).append("<div class='row responsive-sm' id="+rowMenuId+"><div class='col col-50'><div class='card'><div class='item item-text-wrap background-center' style='background-image:url("+resto.picture+")'><span class='price'>"+menu.price+" €</span></div><div class='item item-divider text-center color-white' style=background-color:"+resto.color+">"+menu.name+"</div></div>");
					} 
					// si le compteur est IMPAIRE on ajoute seulement l'ensemble du html pour représenter une card de menu
					else {
						// on recrée l'id de la dernière div.row
						var lastMenuIndex = compteurMenus-1;
						var previousRowMenuId = "row-menu-"+lastMenuIndex;

						// après avoir récupérè la dernière div.row (grâce à l'id recréé précédemment) on ajoute l'ensemble du html pour représenter une card de menu
						angular.element(document.getElementById(previousRowMenuId)).append("<div class='col col-50'><div class='card'><div class='item item-text-wrap background-center' style='background-image:url("+resto.picture+")'><span class='price'>"+menu.price+" €</span></div><div class='item item-divider text-center color-white' style=background-color:"+resto.color+">"+menu.name+"</div>");
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

		
		

 });

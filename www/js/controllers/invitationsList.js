'use strict';


angular.module('InvitationsListController', [])


  .controller('InvitationsListCtrl', function ($scope, $rootScope, $http, $ionicModal, $timeout, $state) {

    // chargement de tous les fichiers JSON dans le rootScope au lancement de l'appli

    $rootScope.repas = {};
    $rootScope.contacts = {};
    $rootScope.profile = {};
    $rootScope.restos = {};
    $scope.invitations = {};
    $scope.contacts = {};


    // Récuperation du repas
    $http.get('data/repas.json')
    .success(function(data) {
      $rootScope.repas = data.repas;
      $scope.invitations = data.repas;
    })
    .error(function(err) {
      alert("Failed reading repas.json");
    });

    // Récuperation des contacts
    $http.get('data/contacts.json')
    .success(function(data) {
      $rootScope.contacts = data.contacts;
      $scope.contacts = data.contacts;
    })
    .error(function(err) {
      alert("Failed reading contacts.json");
    });

    // Récuperation du profil
    $http.get('data/profile.json')
    .success(function(data) {
      $rootScope.profile = data;
    })
    .error(function(err) {
      alert("Failed reading profile.json");
    });

    // Récuperation des restos
    $http.get('data/restos.json')
    .success(function(data) {
      $rootScope.restos = data.restos;
    })
    .error(function(err) {
      alert("Failed reading restos.json");
    });

    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      //$scope.repas = $rootScope.repas;
      $scope.invitations = $scope.getSortedRepas($rootScope.repas);
      console.log($scope.invitations);
    });

    /*// fonction qui s'appelle une fois que tous les appels asynchrones ont été effectués
    $timeout(function() {
      $scope.invitations = $rootScope.repas;
      $scope.contacts = $rootScope.contacts;
    }, 0);*/

    // fonction pour se rendre sur la vue de profil
    $scope.goToProfileView = function () {
      $state.go('app.profile');
    };

    // fonction qui s'effectue à chaque fois que l'on arrive sur la vue sans problèmes
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){

      // on regarde dans le rootScope si l'utilisateur est connecté ou pas
      // si le rootScope n'a pas encore été défini on attribue par défaut la valeur false
      $scope.logged = $rootScope.logged ? $rootScope.logged : false;

      // lorsque le controleur a terminé de charger la Modal (asynchrone)
      $timeout(function(){
        // si l'utilisateur est déconnecté
        if($scope.logged===false) {
          // on affiche la modal de connexion
          $scope.modal.show();
        }
       },0);

      $rootScope.mealModification = false;
    });
    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('views/connexion.html', {
      scope: $scope,
      focusFirstInput: true,
      backdropClickToClose: false,
      hardwareBackButtonClose: false
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      //console.log('Doing login', $scope.loginData);

      $scope.logged = true;
      $rootScope.logged = true;

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };


    $scope.getInvitationUrl= function (id) {
      var url = '#/app/home/repas/' + id;
      return url;
    };


    $scope.saveMealIndex = function(id) {
      $rootScope.lastMealIndex = id;
    };


    $scope.getSortedRepas = function (repas) {
      var sortedRepas = {};
      var date;
      for (var i = 0; i < repas.length; i++) {
        date = $scope.getFullDate(repas[i].mealTime);
        if(sortedRepas[date]) {
          sortedRepas[date].push(repas[i]);
        }
        else {
          sortedRepas[date] = [];
          sortedRepas[date].push(repas[i]);
        }
      }
      return sortedRepas;
    }

    $scope.getCropedNameFromId = function (id) {
      if($scope.contacts[id]) {
        var name = $scope.contacts[id].name;
        var familyName = $scope.contacts[id].name;
        return name + " " + familyName.substring(0,1);
      }
      return null;
    };

		// Recuperation du repas
    $http.get('data/repas.json')
		.success(function(data) {
			$scope.invitations = $scope.getSortedRepas(data.repas);
		})
		.error(function(err) {
			alert("Failed reading repas.json")
		});

		// Recuperation des contacts
    $http.get('data/contacts.json')
		.success(function(data) {
			$scope.contacts = data.contacts;
		})
		.error(function(err) {
			alert("Failed reading contacts.json")
		});

    $scope.getFullDate = function (timestamp) {
      var time = $scope.getTime(timestamp);
      return time.date + " " + time.month + " " + time.year;
    }

    $scope.getTimeToPrint = function (timestamp) {
      var time = $scope.getTime(timestamp);
      return time.hour + ":" + time.min;
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
    }


  });

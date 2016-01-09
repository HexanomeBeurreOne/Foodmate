'use strict';


angular.module('InvitationsListController', [])
  

  .controller('InvitationsListCtrl', function ($scope, $rootScope, $http, $ionicModal, $timeout, $state) {

    // chargement de tous les fichiers JSON dans le rootScope au lancement de l'appli

    // Récuperation du repas
    $http.get('data/repas.json')
    .success(function(data) {
      $rootScope.repas = data.repas;
    })
    .error(function(err) {
      alert("Failed reading repas.json");
    });

    // Récuperation des contacts
    $http.get('data/contacts.json')
    .success(function(data) {
      $rootScope.contacts = data.contacts;
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

    // fonction qui s'appelle une fois que tous les appels asynchrones ont été effectués
    $timeout(function() {
      $scope.invitations = $rootScope.repas;
      $scope.contacts = $rootScope.contacts;
    }, 0);

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

	
    $scope.getTime = function (timestamp) {
      var date = new Date(1000*timestamp);
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var time = hours + ":" + minutes;
      return time;
    };

    $scope.getInvitationUrl= function (id) {
      var url = '#/app/home/repas/' + id;
      return url;
    };


    $scope.saveMealIndex = function(id) {
      $rootScope.lastMealIndex = id;
    };

  });

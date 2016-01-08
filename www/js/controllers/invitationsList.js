'use strict';


angular.module('InvitationsListController', [])
  

    .controller('InvitationsListCtrl', function ($scope, $rootScope, $http, $ionicModal, $timeout) {

      // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('views/connexion.html', {
      scope: $scope
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
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };

  		// Recuperation du repas
	    $http.get('data/repas.json')
			.success(function(data) {
				$scope.invitations = data.repas;
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

      $scope.getTime = function (timestamp) {
        var date = new Date(1000*timestamp);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var time = hours + ":" + minutes;
        return time;
      }

      $scope.getInvitationUrl= function (id) {
        var url = '#/app/home/repas/' + id;
        return url;
      }
    });

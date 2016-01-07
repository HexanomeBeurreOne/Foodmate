'use strict';


angular.module('InvitationsListController', [])

    .controller('InvitationsListCtrl', function ($scope, $rootScope, $http) {

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

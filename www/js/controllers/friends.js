'use strict';


angular.module('FriendsController', [])

    .controller('FriendsCtrl', function ($scope, $rootScope, $http) {
      	$scope.test= "Foodmate friend";


	    $http.get('data/contacts.json')
			.success(function(data) {
				$scope.contacts = data.contacts;
			})
			.error(function(err) {
				alert("Failed reading contacts.json")
			});

		

    });
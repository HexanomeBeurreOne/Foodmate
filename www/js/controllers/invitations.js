'use strict';


angular.module('InvitationsController', [])

    .controller('InvitationsCtrl', function ($scope, $rootScope) {
      $scope.viewName = "Foodmate invits";
      $scope.invitations = [
        {
          id: '1',
          date: '14/12/2015',
          hour: '12:30',
          pending: false,
          going: true,
          hostFriend: {
            id: 'f1',
            name: 'Cyril Canete',
            profileUrl: '',
            pictureUrl: ''
          },
          friends: [
            {
              id: 'f2',
              name: 'Victor McBernite',
              profileUrl: '',
              pictureUrl: ''
            },
            {
              id: 'f3',
              name: 'Adrien Minilla',
              profileUrl: '',
              pictureUrl: ''
            }
          ]
        },
        {
          id: '2',
          date: '14/12/2015',
          hour: '18:30',
          pending: true,
          going: null,
          hostFriend: {
            id: 'f4',
            name: 'Quentin Bayart',
            profileUrl: '',
            pictureUrl: ''
          },
          friends: [
            {
              id: 'f5',
              name: 'Victor McBernite',
              profileUrl: '',
              pictureUrl: ''
            },
            {
              id: 'f6',
              name: 'Arthur Ultra',
              profileUrl: '',
              pictureUrl: ''
            }
          ]
        }
      ];

    });

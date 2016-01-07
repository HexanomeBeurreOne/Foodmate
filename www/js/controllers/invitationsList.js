'use strict';


angular.module('InvitationsListController', [])
  

    .controller('InvitationsListCtrl', function ($scope, $rootScope, $ionicModal, $timeout) {


   

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
            pictureUrl: 'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/10262052_10203873046533432_5401981285565284598_n.jpg?oh=10d2c0d6442b063b8fefe18623471b31&oe=5713EC05'
          },
          friends: [
            {
              id: 'f2',
              name: 'Victor McBernite',
              profileUrl: '',
              pictureUrl: 'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/11263015_10206542784993412_3245331619797204354_n.jpg?oh=49a728cd1086d6be1eb419f54db0fb2a&oe=56D57E60'
            },
            {
              id: 'f3',
              name: 'Adrien Minilla',
              profileUrl: '',
              pictureUrl: 'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/12108835_898137603573444_3118983770600829615_n.jpg?oh=cc333e1e0dcf6b39b338f999fcb2d72b&oe=56E74279'
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
            pictureUrl: 'https://scontent.xx.fbcdn.net/hphotos-xal1/v/t1.0-9/1974986_10206417396940760_4767835887989977334_n.jpg?oh=d5682756dfa0c33aa770e34053d24126&oe=571E1D34'
          },
          friends: [
            {
              id: 'f5',
              name: 'Victor McBernite',
              profileUrl: '',
              pictureUrl: 'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/11263015_10206542784993412_3245331619797204354_n.jpg?oh=49a728cd1086d6be1eb419f54db0fb2a&oe=56D57E60'
            },
            {
              id: 'f6',
              name: 'Arthur Ultra',
              profileUrl: '',
              pictureUrl: 'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-9/11219622_895870443824652_3118536268893820360_n.jpg?oh=4c078258210262336f72a044b78fdaab&oe=56E09C73'
            }
          ]
        }
      ];

    });

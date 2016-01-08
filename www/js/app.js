// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('foodmate', ['ionic', 'ConnexionController', 'InvitationsListController', 'FriendsController', 'ProfileController', 'ChoixMenusController', 'RepasController'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'views/racine.html'
  })

   .state('app.repas', {
      url: '/home/repas/:id',
      views: {
        'app': {
          templateUrl: 'views/repas.html',
          controller: 'RepasCtrl'
        }
      }
    })

  .state('app.profile', {
     url: '/home/profile',
     views: {
       'app': {
         templateUrl: 'views/profile.html',
         controller: 'ProfileCtrl'
       }
     }
   })
 .state('app.invitations-list', {
    url: '/home/list-invitations',
    views: {
      'app': {
        templateUrl: 'views/invitations-list.html',
        controller: 'InvitationsListCtrl'
      }
    }
  })
 .state('app.choix-menus', {
    url: '/home/choix-menus',
    views: {
      'app': {
        templateUrl: 'views/choix-menus.html',
        controller: 'ChoixMenusCtrl'
      }
    }
  })
 .state('app.friends', {
    url: '/home/friends',
    views: {
      'app': {
        templateUrl: 'views/friends.html',
        controller: 'FriendsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home/list-invitations');
});

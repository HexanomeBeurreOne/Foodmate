// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('foodmate', ['ionic', 'HomeController', 'InvitationsController'])

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
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  })

   .state('inviationsPanel', {
    url: '/invitations',
    templateUrl: 'views/invitations.html',
    controller: 'InvitationsCtrl'
  })
/*  .state('home.choix-menu', {
    url: '/choix-menu',
    templateUrl: 'modules/choix-menu/views/choix-menu.html',
    controller: 'ChoixMenuCtrl'
  })*/

/*  .state('home.choix-menu', {
    url: '/choix-menu/choix-resto',
    views: {
        templateUrl: 'modules/choix-menu/views/choix-resto.html',
        controller: 'ChoixRestoCtrl'
    }
  })*/

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app');
});

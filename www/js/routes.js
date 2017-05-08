angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('socialMedia', {
    url: '/',
    templateUrl: 'templates/socialMedia.html',
    controller: 'socialMediaCtrl'
  })

  .state('speakers', {
    url: '/page3',
    templateUrl: 'templates/speakers.html',
    controller: 'speakersCtrl'
  })

  .state('schedule', {
    url: '/page13',
    templateUrl: 'templates/schedule.html',
    controller: 'scheduleCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('weather', {
    url: '/page6',
    templateUrl: 'templates/weather.html',
    controller: 'weatherCtrl'
  })

  .state('map', {
    url: '/page7',
    templateUrl: 'templates/map.html',
    controller: 'mapCtrl'
  })

  .state('hotelInformation', {
    url: '/page8',
    templateUrl: 'templates/hotelInformation.html',
    controller: 'hotelInformationCtrl'
  })

  .state('iSCAPOld', {
    url: '/page14',
    templateUrl: 'templates/iSCAPOld.html',
    controller: 'iSCAPOldCtrl'
  })

  .state('home', {
    url: '/page9',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('trafficConditions', {
    url: '/page10',
    templateUrl: 'templates/trafficConditions.html',
    controller: 'trafficConditionsCtrl'
  })

  .state('home2', {
    url: '/page11',
    templateUrl: 'templates/home2.html',
    controller: 'home2Ctrl'
  })

  .state('map2', {
    url: '/page15',
    templateUrl: 'templates/map2.html',
    controller: 'map2Ctrl'
  })

  .state('fAQ', {
    url: '/page12',
    templateUrl: 'templates/fAQ.html',
    controller: 'fAQCtrl'
  })

$urlRouterProvider.otherwise('/page11')

  

});
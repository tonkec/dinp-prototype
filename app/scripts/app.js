'use strict';

/**
 * @ngdoc overview
 * @name dinpApp
 * @description
 * # dinpApp
 *
 * Main module of the application.
 */
angular
  .module('dinpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'swiperCard',
    'swiperThumb'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/typography', {
        templateUrl: 'views/typography.html',
        controller: 'TypographyCtrl'
      })
      .when('/color/palettes', {
        templateUrl: 'views/colorpalettes.html',
        controller: 'ColorpalettesCtrl'
      })
      .when('/hi/def/images', {
        templateUrl: 'views/hidefimages.html',
        controller: 'HidefimagesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

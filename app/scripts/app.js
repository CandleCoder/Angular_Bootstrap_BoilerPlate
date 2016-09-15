'use strict';

/**
 * @ngdoc overview
 * @name demoClientApp
 * @description
 * # demoClientApp
 *
 * Main module of the application.
 */
angular
  .module('demoClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      // .when('/loginuser', {
      // templateUrl: 'views/movies.html',
      // controller: 'MoviesCtrl',
      // })
      .otherwise({
        redirectTo: '/'
      });
  });

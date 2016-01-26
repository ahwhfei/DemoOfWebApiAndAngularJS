'use strict';

/**
 * @ngdoc overview
 * @name uiApp
 * @description
 * # uiApp
 *
 * Main module of the application.
 */
var app = angular
  .module('uiApp', [
    'adf',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'structures',
    'LocalStorageModule',
    'widgets.students'
  ])
  .config(function ($routeProvider, localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('adf');

    $routeProvider
      .when('/', {
        templateUrl: 'views/students.html',
        controller: 'StudentsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

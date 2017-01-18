'use strict';

/**
 * @ngdoc overview
 * @name ramesApp
 * @description
 * # ramesApp
 *
 * Main module of the application.
 */
angular
  .module('ramesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {

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

      .when('/aboutCreator', {
        templateUrl: 'views/aboutcreator.html',
        controller: 'AboutcreatorCtrl',
        controllerAs: 'aboutCreator'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl',
        controllerAs: 'settings'
      })
      .when('/reports/:reportID', {
        templateUrl: 'views/report.html',
        controller: 'ReportCtrl',
        controllerAs: 'report'
      })
      .when('/newReport', {
        templateUrl: 'views/newreport.html',
        controller: 'NewreportCtrl',
        controllerAs: 'newReport'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);

  });

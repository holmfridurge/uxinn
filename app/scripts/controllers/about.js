'use strict';

/**
 * @ngdoc function
 * @name ramesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ramesApp
 */
angular.module('ramesApp')
  .controller('AboutCtrl', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      {id: 3, name: "Skyrsla10"},
      'AngularJS',
      'Karma'
    ];
    $scope.reports = [
      {id: 1, name: "Skyrsla8"},
      {id: 2, name: "Skyrsla9"},
      {id: 4, name: "Skyrsla11"}
    ];

    // COLLAPSE =====================
    $scope.isCollapsed = false;
  });

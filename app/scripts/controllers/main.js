'use strict';

/**
 * @ngdoc function
 * @name demo2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demo2App
 */
angular.module('demo2App')
  .controller('MainCtrl', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.reports = [
      {id: 1, name: "Skyrsla1"},
      {id: 2, name: "Skyrsla2"},
      {id: 3, name: "Skyrsla3"},
      {id: 4, name: "Skyrsla4"}
    ];

    // COLLAPSE =====================
    $scope.isCollapsed = false;
  });

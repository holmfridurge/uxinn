'use strict';

/**
 * @ngdoc function
 * @name demo2App.controller:ReportCtrl
 * @description
 * # ReportCtrl
 * Controller of the demo2App
 */
angular.module('demo2App')
  .controller('ReportCtrl', function ($scope, $routeParams) {
    $scope.reportID = $routeParams.reportID;
    console.log($scope.reportID);
    console.log($routeParams.reportID);
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });

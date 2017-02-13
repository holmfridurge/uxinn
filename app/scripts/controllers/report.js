'use strict';

/**
 * @ngdoc function
 * @name ramesApp.controller:ReportCtrl
 * @description
 * # ReportCtrl
 * Controller of the ramesApp
 */
angular.module('ramesApp')
  .controller('ReportCtrl', function ($scope, $routeParams) {
    console.log('Inside controller');
    console.log($routeParams);
    $scope.reportID = $routeParams.reportID;
    /*console.log($scope.reportID);
      console.log($routeParams.reportID);*/
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });

'use strict';

/**
 * @ngdoc function
 * @name ramesApp.controller:NewreportCtrl
 * @description
 * # NewreportCtrl
 * Controller of the ramesApp
 */
angular.module('ramesApp')
  .controller('NewreportCtrl', function ($scope, $location, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var baseUrl = "http://localhost:8000";

    $http.get(baseUrl + "/api/ramescategory/ordered/sequenceNumber")
      .then(function (response) {
        $scope.categories = response.data;
      });

    $http.get(baseUrl + "/api/ramesquestion")
      .then(function (response) {
        $scope.questions = response.data;
      });

    $http.get(baseUrl + "/api/ramesinfo")
      .then(function (response) {
        $scope.ramesinfo = response.data;
      });


  });

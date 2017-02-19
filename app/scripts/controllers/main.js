'use strict';

/**
 * @ngdoc function
 * @name ramesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ramesApp
 */
angular.module('ramesApp')
  .controller('MainCtrl', function ($scope, $location, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // On sign in, add token to header. Retrieve token and 
    // User id. Should be retrieved from the header.
    var userID = 2;

    $http.get("http://localhost:8000/api/reports/user/" + userID + "/")
      .then(function (response) {
        $scope.reports = response.data;
      });

    $scope.refresh = function () {
      $http.get("http://localhost:8000/api/reports/user/" + userID + "/")
        .then(function (response) {
          $scope.reports = response.data;
        });
    }

    $scope.deleteReport = function (id) {
      $http.delete("http://localhost:8000/api/reports/" + id)
        .then(function (response) {
          console.log("Success");
          $scope.refresh();
        }, function (response) {
          console.log("Error, something bad happened");
        });
    }


    // COLLAPSE =====================
    $scope.isCollapsed = false;

    $('.makeBorder').click(function () {
      console.log('in function');
      ('#roles{{report.id}}').click();
    })
  });

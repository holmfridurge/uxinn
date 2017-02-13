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
    var userID = 1;
    
    $http.get("http://localhost:8000/api/reports/user/" + userID + "/")
      .then(function(response) { 
        $scope.reportsOfUser = response.data;
      });
    /*$http.get("http://localhost:8000/api/user")
      .then(function(response){ $scope.users = response.data; });*/


    // COLLAPSE =====================
    $scope.isCollapsed = false;
  });

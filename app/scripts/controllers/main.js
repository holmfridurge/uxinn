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
    $scope.reports = [
      {id: 1, name: "Skyrsla1"},
      {id: 2, name: "Skyrsla2"},
      {id: 3, name: "Skyrsla3"},
      {id: 4, name: "Skyrsla4"}
    ];

    $http.get("http://localhost:8000/api/user")
      .then(function(response){ $scope.users = response.data; });

    //console.log(JSON.parse($scope.users));

    // COLLAPSE =====================
    $scope.isCollapsed = false;
  });

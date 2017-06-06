'use strict';

/**
 * @ngdoc function
 * @name ramesApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the ramesApp
 */
angular.module('ramesApp')
  .controller('ContactCtrl', function ($scope, $http) {
    var baseUrl = "http://localhost:8000";

    var reporttypeID = 1;

    // -------------------- http requests --------------------
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

    $http.get(baseUrl + "/api/reportsinfo/report/" + $scope.reportID)
      .then(function(response) {
        $scope.reportIDInfo = response.data;
      });

    $http.get(baseUrl + "/api/questiondropdownchoices/")
      .then(function(response) {
        $scope.dropdownChoices = response.data;
      });

    $http.get(baseUrl + "/api/questioncheckboxchoices/")
      .then(function(response) {
        $scope.checkboxChoices = response.data;
      });

    $http.get(baseUrl + "/api/questionradiochoices/")
      .then(function(response) {
        $scope.radioChoices = response.data;
      });

    
  });

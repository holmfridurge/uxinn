'use strict';

/**
 * @ngdoc function
 * @name ramesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ramesApp
 */
angular.module('ramesApp')
  .controller('AboutCtrl',  function ($scope, $location, $http) {

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


    // -------------------- functions --------------------

    $scope.reportName = {
      "userID": 2,
      "reporttypeID": reporttypeID
    };

    $scope.reportInfo = {
      "ReportID": $scope.reportID,
      //"Answer": {}
    };

    // ----------- report stuff

    $scope.resetValue = function(questionID) {
      $scope.reportInfo.Answer[questionID]['Text'] = '';
      console.log($scope.reportInfo.Answer[questionID]['Text']);
    }

  });

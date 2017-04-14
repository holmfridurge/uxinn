'use strict';

/**
 * @ngdoc function
 * @name ramesApp.controller:ReportCtrl
 * @description
 * # ReportCtrl
 * Controller of the ramesApp
 */
angular.module('ramesApp')
  .controller('NewreportCtrl', function ($scope, $routeParams, $http) {
    console.log('Inside controller');
    console.log($routeParams);
    $scope.reportID = $routeParams.reportID;
    
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

    // -------------------- functions --------------------

    $scope.reportName = {
      "userID": 2,
      "reporttypeID": reporttypeID
    };




    $scope.reportInfo = {
      "ReportID": $scope.reportID
    };



    $scope.save = function(reportName) {
      $http.post(baseUrl + "/api/reports", reportName);
      console.log('success');
    };



    $scope.saveInfo = function(reportInfo, reportName) {
      
      $http.post(baseUrl + "/api/reports", reportName)
        .then(function(response) {
          console.log("response: " + JSON.stringify(response));
        });

      // angular.forEach(reportInfo, function(value, index) {
      //    console.log(value);
      // });

      // var length = Object.keys(reportInfo['Answer']).length;
      // var keys = Object.keys(reportInfo['Answer']);
      
      

      // for(var i = 0; i < length; i++) {
      //   var answer = {
      //     "ReportID": $scope.reportID,
      //     "QuestionID": keys[i],
      //     "Answer": reportInfo['Answer'][keys[i]]
      //   };

      //   console.log("answer " + angular.toJson(answer));

      //   $http.post(baseUrl + "/api/reportsInfo", answer);
      //   console.log("blabla " + reportInfo['Answer'][keys[i]]);
      // }
    };

  });

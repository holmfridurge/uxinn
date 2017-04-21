'use strict';

/**
 * @ngdoc function
 * @name ramesApp.controller:NewreportCtrl
 * @description
 * # NewreportCtrl
 * Controller of the ramesApp
 */
angular.module('ramesApp')
  .controller('ReportCtrl', function ($scope, $routeParams, $location, $http) {

    //$scope.reportID = 26;
    $scope.reportID = $routeParams.reportID;
    
    var baseUrl = "http://localhost:8000";

    var reporttypeID = 1;    

    if (window.location.href.substr(-2) !== '?r') {
    window.location = window.location.href + '?r';
}

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
        angular.forEach($scope.reportIDInfo, function(data) {
          if($.isNumeric(data.Answer)) {
            data.Answer = parseInt(data.Answer);
            console.log("bla: " + angular.toJson(data));
          }
        })
      });

    $http.get(baseUrl + "/api/reports/" + $scope.reportID)
      .then(function(response) {
        $scope.reportName = response.data[0]['Name'];
      });

      
    
    
    
    // -------------------- functions --------------------
    $scope.questionsInReport = function() {
      $scope.rep = [];
      angular.forEach($scope.reportIDInfo, function(value, index) {
        //$scope.rep.push(data.QuestionID + ': ' + data.Answer);
        $scope.rep.push(value.Answer);
      });

        $scope.repo2 = {
          "ReportID": $scope.reportID,
          "Answer": $scope.repo2
        }

        $scope.repo3 = angular.toJson($scope.reportIDInfo[1]['Answer']);
        console.log($scope.rep);
        console.log("repo2: " + $scope.repo3);
    }

    $scope.reportInfo = {
      "ReportID": $scope.reportID
    };



    $scope.save = function(reportName) {
      $http.post(baseUrl + "/api/reports", reportName);
      console.log('success');
    };



    $scope.updateInfo = function(reportInfo) {
      angular.forEach(reportInfo, function(value, index) {
         console.log(value);
      });

      var length = Object.keys(reportInfo['Answer']).length;
      var keys = Object.keys(reportInfo['Answer']);
      
      for(var i = 0; i < length; i++) {
        var answer = {
          "ReportID": $scope.reportID,
          "QuestionID": keys[i],
          "Answer": reportInfo['Answer'][keys[i]]
        };

        console.log("answer " + angular.toJson(answer));

        $http.post(baseUrl + "/api/reportsInfo", answer);
        console.log("blabla " + reportInfo['Answer'][keys[i]]);
      }

      console.log("report info " + angular.toJson(reportInfo));
    };

  });

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
      "ReportID": $scope.reportID
    };


    $scope.resetValue = function(questionID) {
      $scope.reportInfo.Answer[questionID]['Text'] = '';
      console.log($scope.reportInfo.Answer[questionID]['Text']);
    };
    
    $scope.saveInfo = function(reportInfo, reportName) {
      
      $http.post(baseUrl + "/api/reports", reportName)
        .then(function(response) {
          $scope.reportID = response.data;

          var length = Object.keys(reportInfo['Answer']).length;
          var keys = Object.keys(reportInfo['Answer']);
          

          for(var i = 0; i < length; i++) {
            console.log("typeof answer " + typeof(reportInfo['Answer'][keys[i]]))
            if(typeof(reportInfo['Answer'][keys[i]]) == 'object') {
              // var bla = JSON.parse(angular.toJson(reportInfo['Answer'][keys[i]]));
              var answer = {
                "ReportID": $scope.reportID,
                "QuestionID": keys[i],
                "Answer": JSON.stringify(reportInfo['Answer'][keys[i]])
              }
              // var keys2 = Object.keys(bla);
              // var length2 = Object.keys(bla).length;
              // for(var j = 0; j < length2; j++) {
              //   if(bla[])
              //   console.log("bla " + bla[keys2[j]]);
              // }

            } else {
              var answer = {
                "ReportID": $scope.reportID,
                "QuestionID": keys[i],
                "Answer": reportInfo['Answer'][keys[i]]
              }
            };

            console.log("answer " + angular.toJson(answer));

            $http.post(baseUrl + "/api/reportsInfo", answer);
          }

          window.location.href = "#/reports/" + $scope.reportID;
        });
      
    };

  });

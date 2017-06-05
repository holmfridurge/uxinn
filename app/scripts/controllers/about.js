'use strict';

/**
 * @ngdoc function
 * @name ramesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ramesApp
 */
angular.module('ramesApp')
  .controller('AboutCtrl',  function ($scope, $location, $http, $routeParams) {
    
   console.log('Inside controller');
    console.log($routeParams);
    $scope.reportID = $routeParams.reportID;
    
    var baseUrl = "http://localhost:8000";

    var reporttypeID = 1;

    $scope.setTempItem = function(item) {
        $scope.currentItem = item;

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
              var answer = {
                "ReportID": $scope.reportID,
                "QuestionID": keys[i],
                "Answer": JSON.stringify(reportInfo['Answer'][keys[i]])
              }
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

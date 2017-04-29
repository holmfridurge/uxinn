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

    //$scope.reportID = 62;
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


    function isJson(str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    }

    $http.get(baseUrl + "/api/reportsinfo/report/" + $scope.reportID)
      .then(function(response) {
        $scope.reportInfo = response.data;

        angular.forEach($scope.reportInfo, function(data) {
          if($.isNumeric(data.Answer)) {
            data.Answer = parseInt(data.Answer);
          }
          else if (isJson(data.Answer)) {
            data.Answer = JSON.parse(data.Answer);
            var keys = Object.keys(data.Answer);

           angular.forEach($scope.questions, function(question) {
            if(data.QuestionID == question.ID) {
              if(question.Type == 'conditionalyesnotext') {
                data.Answer = Object.values(data.Answer);
              }
            }
           });
          }
        });
      });

    $http.get(baseUrl + "/api/reports/" + $scope.reportID)
      .then(function(response) {
        $scope.reportName = response.data[0]['Name'];
        console.log($scope.reportName);
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
    $scope.reportInfo = {
      "ReportID": $scope.reportID
    };

    $scope.resetValue = function(questionID) {
      angular.forEach($scope.reportIDInfo, function(value) {
        if(value.QuestionID == questionID) {
          value.Answer[1] = '';
        }
      });
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

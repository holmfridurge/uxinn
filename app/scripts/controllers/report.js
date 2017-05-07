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

        console.log(angular.toJson($scope.reportInfo));

        angular.forEach($scope.reportInfo, function(data) {
          if($.isNumeric(data.Answer)) {
            data.Answer = parseInt(data.Answer);
          }
          else if (isJson(data.Answer)) {
            data.Answer = JSON.parse(data.Answer);
            var keys = Object.keys(data.Answer);
          }
        });
      });

    $http.get(baseUrl + "/api/reports/" + $scope.reportID)
      .then(function(response) {
        $scope.reportName = response.data;
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

    $scope.updateInfo = function(reportInfo, reportName) {
      $http.put(baseUrl + "/api/reports", reportName)
        .then(function(response) {
          
          //$scope.reportID = response.data;

          var length = Object.keys(reportInfo).length;
          // var keys = Object.keys(reportInfo);
          // console.log(keys);
          
          

          for(var i = 0; i < length; i++) {
            
            
            console.log("key " + reportInfo[i].QuestionID + " info " + angular.toJson(reportInfo[i]));
            
            if(typeof(reportInfo[i]) == 'object') {
              console.log("object ob " + angular.toJson(reportInfo[i].Answer));
              var answer = {
                "ID": reportInfo[i].ID,
                "ReportID": $scope.reportID,
                "QuestionID": reportInfo[i].QuestionID,
                "Answer": JSON.stringify(reportInfo[i].Answer)
              }
            } else {
              var answer = {
                "ID": reportInfo[i].ID,                
                "ReportID": $scope.reportID,
                "QuestionID": reportInfo[i].QuestionID,
                "Answer": reportInfo[i].Answer
              }
            };

            //console.log("id " + reportInfo[i].ID);
            console.log("answer " + angular.toJson(answer));

            $http.put(baseUrl + "/api/reportsInfo", answer);
          };

        });
    };
  });

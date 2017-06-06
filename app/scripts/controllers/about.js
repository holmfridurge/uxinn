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
      .then(function (response) {
        $scope.reportInfo = response.data;

        angular.forEach($scope.reportInfo, function (data) {
          if ($.isNumeric(data.Answer)) {
            data.Answer = parseInt(data.Answer);
          }
          else if (isJson(data.Answer)) {
            data.Answer = JSON.parse(data.Answer);
            var keys = Object.keys(data.Answer);
          }
        });
      });

    $http.get(baseUrl + "/api/reports/" + $scope.reportID)
      .then(function (response) {
        $scope.reportName = response.data;
      });

    $http.get(baseUrl + "/api/questiondropdownchoices/")
      .then(function (response) {
        $scope.dropdownChoices = response.data;
      });

    $http.get(baseUrl + "/api/questioncheckboxchoices/")
      .then(function (response) {
        $scope.checkboxChoices = response.data;
      });

    $http.get(baseUrl + "/api/questionradiochoices/")
      .then(function (response) {
        $scope.radioChoices = response.data;
      });


    $(document).ready (function(){
        $("#success-alert").hide();
        $("#succ").click(function showAlert() { 
            $("#success-alert").alert();
            $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
            $("#success-alert").slideUp(500);
            });
        });
    });

    // -------------------- functions --------------------
    $scope.reportInfo = {
      "ReportID": $scope.reportID
    };

    $scope.resetValue = function (questionID) {
      angular.forEach($scope.reportInfo, function (value) {
        if (value.QuestionID == questionID) {
          value.Answer['Text'][Object.keys(value.Answer['Text'])] = '';
          value.Answer['Textbox'][Object.keys(value.Answer['Textbox'])] = '';
        }
      });
    };

    $scope.updateInfo = function (reportInfo, reportName) {
      $http.put(baseUrl + "/api/reports", reportName)
        .then(function (response) {

          var length = Object.keys(reportInfo).length;

          try {
            for (var i = 0; i < length; i++) {
                console.log(reportInfo[i]);
                var match = /\r|\n/.exec(reportInfo[i].Answer);
              if (typeof (reportInfo[i]) == 'object') {
                if(match) {
                  var answer = {
                    "ID": reportInfo[i].ID,
                    "ReportID": $scope.reportID,
                    "QuestionID": reportInfo[i].QuestionID,
                    "Answer": reportInfo[i].Answer
                  }
                } else {
                  var answer = {
                    "ID": reportInfo[i].ID,
                    "ReportID": $scope.reportID,
                    "QuestionID": reportInfo[i].QuestionID,
                    "Answer": JSON.stringify(reportInfo[i].Answer)
                  }
                }
              } else {
                var answer = {
                  "ID": reportInfo[i].ID,
                  "ReportID": $scope.reportID,
                  "QuestionID": reportInfo[i].QuestionID,
                  "Answer": reportInfo[i].Answer
                }
              };

              $http.put(baseUrl + "/api/reportsInfo", answer);

            };
          } catch (e) {

          }



        });
    };

});

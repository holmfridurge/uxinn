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
      $scope.reportInfo.Answer[questionID]['Textbox'][Object.keys($scope.reportInfo.Answer[questionID]['Textbox'])] = '';
    };
    
    $scope.saveInfo = function(reportInfo, reportName) {
      
      $http.post(baseUrl + "/api/reports", reportName)
        .then(function(response) {
          $scope.reportID = response.data;

          var length = Object.keys(reportInfo['Answer']).length;
          var keys = Object.keys(reportInfo['Answer']);
          

          for(var i = 0; i < length; i++) {
            console.log(typeof(reportInfo['Answer'][keys[i]]));
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


    // PDF maker 

    var getLayout = function () {
            return {
                hLineWidth: function () {
                    // up
                    return 0.1;
                },
                vLineWidth: function () {
                    // down
                    return 0.1;
                },
                hLineColor: function () {
                    return 'gray';
                },
                vLineColor: function () {
                    return 'gray';
                }
            };
        };

        var getTable = function () {
            var reportBody = [];

            angular.forEach($scope.categories, function(category) {
                reportBody.push([{ text: category.category, style: 'categoryBold' }, ""]);

                angular.forEach($scope.ramesinfo, function(info) {
                    if(info.CategoryID == category.ID) {
                        var answers = "";
                        angular.forEach($scope.questions, function(question) {
                            if(question.RamesInfoID == info.ID) {
                                angular.forEach($scope.reportInfo, function(answer) {
                                    if(answer.QuestionID == question.ID) {
                                      if(answer.Answer != "" && answer.Answer != '0') {
                                        if(typeof(answer.Answer) == 'object') {
                                            answers += question.Question + "\n";
                                            angular.forEach(answer.Answer, function(an) {
                                                if(typeof(an) == 'object') {
                                                    angular.forEach(an, function(a) {
                                                      if(a == "") {
                                                        answers += "";
                                                      } else {
                                                        answers += a + "\n";
                                                      }
                                                    });
                                                } else {
                                                    answers += an + "\n";
                                                }
                                            });
                                        } else {
                                            if(question.Type == 'yesno' && answer.Answer == 'y') {
                                                answers += question.Question + " Yes \n";
                                            } else if(question.Type == 'yesno' && answer.Answer == 'n') {
                                                answers += question.Question + " No \n";
                                            } else {
                                                answers += question.Question + " " + answer.Answer + "\n";
                                            }
                                        }
                                      }
                                    }
                                });
                            }
                        });
                        reportBody.push([info.Name, answers]);
                    }
                });
            });
            var rName = $scope.reportName[0]['Name'];
            return [
                { text: rName, fontSize: 20, bold: false, alignment: 'center', style: ['lineSpacing', 'headingColor'] },
                // Line beneath name of report
                // Name of report
                { canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595 - 2 * 40, y2: 5, lineWidth: 1, lineColor: '#990033', style: ['lineSpacing'] }] },
                { text: '', style: ['doublelineSpacing'] },
                {
                    table: {
                        widths: ['auto', 'auto'],
                        headerRows: 1,
                        // keepWithHeaderRows: 1,
                        body: reportBody
                        // [
                        //     // ['Project', { text: 'Technology', style: 'tableHeader' }, 'Language', 'Database'],
                        //     // ['Intranet', 'Microsoft', { text: 'Sharepoint', colSpan: 2 }, {}],
                        // ]
                    }, layout: getLayout()
                }

            ];
        };

        $scope.downloadPDF = function () {
            var docDefinition = {
                pageMargins: [72, 80, 40, 60],
                layout: 'headerLineOnly',
                pageSize: 'A4',
                header: function () {
                                margin: [50, 20, 5, 5]

                    return {
                        columns: [
                            {
                                text: 'Csharp',
                                width: 200,
                            },
                            {
                                stack: [
                                    { text: 'Project Details', alignment: 'right', fontSize: 12, margin: [0, 30, 50, 0] }
                                ]
                            }
                        ]
                    }
                },

                footer: function (currentPage, pageCount) {
                    return {
                        stack: [{ canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595, y2: 5, lineWidth: 1, lineColor: '#ffff00', style: ['lineSpacing'] }] },
                        { text: '', margin: [0, 0, 0, 5] },
                        {
                            columns: [
                                {},
                                { text: currentPage.toString(), alignment: 'center' },
                                { text: moment(new Date()).format("DD-MMM-YYYY"), alignment: 'right', margin: [0, 0, 20, 0] }
                            ]
                        }]

                    };
                },
                content: [
                    { stack: getTable() }
                ],
                styles: {
                    'lineSpacing': {
                        margin: [0, 0, 0, 6]
                    },
                    'doublelineSpacing': {
                        margin: [0, 0, 0, 12]
                    },
                    'headingColor':
                    {
                        color: '#999966'
                    },
                    tableHeader: {
                        bold: true,
                        fontSize: 13,
                        color: '#669999'
                    },
                    categoryBold: {
                        bold: true
                    }
                }
            }

            var date = new Date();
            date = moment(date).format('DD_MMM_YYYY_HH_mm_ss');
            pdfMake.createPdf(docDefinition).download($scope.reportName[0].Name + "_" + date + '.pdf');

        };


        $scope.previewPDF = function () {
            var docDefinition = {
                pageMargins: [72, 80, 40, 60],
                layout: 'headerLineOnly',
                pageSize: 'A4',
                header: function () {

                    return {
                        columns: [
                            {
                                text: 'Csharp',
                                width: 200,
                                margin: [50, 20, 5, 5]
                            },
                            {
                                stack: [
                                    { text: 'Project Details', alignment: 'right', fontSize: 12, margin: [0, 30, 50, 0] }
                                ]
                            }
                        ]
                    }
                },

                footer: function (currentPage, pageCount) {
                    return {
                        stack: [{ canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595, y2: 5, lineWidth: 1, lineColor: '#ffff00', style: ['lineSpacing'] }] },
                        { text: '', margin: [0, 0, 0, 5] },
                        {
                            columns: [
                                {},
                                { text: currentPage.toString(), alignment: 'center' },
                                { text: moment(new Date()).format("DD-MMM-YYYY"), alignment: 'right', margin: [0, 0, 20, 0] }
                            ]
                        }]

                    };
                },
                content: [
                    { stack: getTable() }
                ],
                styles: {
                    'lineSpacing': {
                        margin: [0, 0, 0, 6]
                    },
                    'doublelineSpacing': {
                        margin: [0, 0, 0, 12]
                    },
                    'headingColor':
                    {
                        color: '#999966'
                    },
                    tableHeader: {
                        bold: true,
                        fontSize: 13,
                        color: '#669999'
                    },
                    categoryBold: {
                        bold: true
                    }
                }
            }

            pdfMake.createPdf(docDefinition).open();
        };

  });

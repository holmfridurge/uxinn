var user = require('./Models/users');

var report = require('./Models/reports');
var reportType = require('/Models/reports_type');
var reportInfo = require('/Models/reports_info');

var ramesInfo = require('./Models/rames_info');
var ramesQuestion = require('/Models/rames_questions');
var ramesCategory = require('/Models/rames_category');

var language = require('/Models/languages');

module.exports = {
  configure: function(app) {
    // -----------------------------
    // --------- user urls ---------
    // -----------------------------
    // Returns a list of all users
    app.get('/user/', function(req, res) {
      user.get(res);
    });

    // Returns the info of a user with the given id
    app.get('/user/:id/', function(req, res) {
      user.getUserByID(req.params.id, res);
    });

    // Adds a new user to the database
    app.post('/user/', function(req, res) {
      user.create(req.body, res);
    });
    
    // Updates the user
    app.put('/user/', function(req, res) {
      user.update(req.body, res);
    });
    
    // Deletes the user with the given id
    app.delete('/user/:id/', function(req, res) {
      user.delete(req.params.id, res);
    });

    // Returns the user with the given token
    app.get('/token/:token/', function(req, res) {
      user.getUserByToken(req.params.token, res);
    });

    // ------------------------------
    // --------- rames urls ---------
    // ------------------------------
    
    // --------------------------------------------
    // ---------------- rames info ----------------
    // --------------------------------------------
    app.get('/ramesinfo/', function(req, res) {
      ramesInfo.get(res);
    });

    app.get('/ramesinfo/:id/', function(req, res) {
      ramesInfo.getRamesInfoByID(req.params.id, res);
    });

    app.get('/ramesinfo/category/:categoryId', function(req, res) {
      ramesInfo.getRamesInfoByCategoryID(req.params.categoryId, res);
    });

    app.get('/ramesinfo/language/:languageId', function(req, res) {
      ramesInfo.getRamesInfoByLanguageID(req.params.languageId, res);
    });

    // Adds a new report to the database
    app.post('/ramesinfo/', function(req, res) {
      ramesInfo.create(req.body, res);
    });

    // Updates the user
    app.put('/ramesinfo/', function(req, res) {
      ramesInfo.update(req.body, res);
    });
    
    // Deletes the user with the given id
    app.delete('/ramesinfo/:id/', function(req, res) {
      ramesInfo.delete(req.params.id, res);
    });

    // --------------------------------------------
    // -------------- rames picture ---------------
    // --------------------------------------------
    // DO LATER

    // --------------------------------------------
    // -------------- rames questions -------------
    // --------------------------------------------

    app.get('/ramesquestion/', function(req, res) {
      ramesQuestion.get(res);
    });

    app.get('/ramesquestion/:id/', function(req, res) {
      ramesQuestion.getRamesQuestionByID(req.params.id, res);
    });

    app.get('/ramesquestion/category/:categoryId', function(req, res) {
      ramesQuestion.getRamesQuestionByCategoryID(req.params.categoryId, res);
    });

    app.get('/ramesquestion/language/:languageId', function(req, res) {
      ramesQuestion.getRamesQuestionByLanguageID(req.params.languageId, res);
    });

    // Adds a new report to the database
    app.post('/ramesquestion/', function(req, res) {
      ramesQuestion.create(req.body, res);
    });

    // Updates the user
    app.put('/ramesquestion/', function(req, res) {
      ramesQuestion.update(req.body, res);
    });
    
    // Deletes the user with the given id
    app.delete('/ramesquestion/:id/', function(req, res) {
      ramesQuestion.delete(req.params.id, res);
    });

    // --------------------------------------------
    // -------------- rames category --------------
    // --------------------------------------------
    // Returns a list of all categories
    app.get('/ramescategory/', function(req, res) {
      ramesCategory.get(res);
    });

    // Returns the category with the given id
    app.get('/ramescategory/:id/', function(req, res) {
      ramesCategory.getRamesCategoryByID(req.params.id, res);
    });

    // Returns all categories with given language
    app.get('ramescategory/language/:languageid/', function(req, res) {
      ramesCategory.getAllRamesCategoryByLanguageID(req.params.languageid, res);
    });

    app.get('ramescategory/:id/language/:languageid/', function(req, res) {
      var data = {
        id: req.params.id,
        languageID: req.params.languageid
      }
      ramesCategory.getRamesCategoryByLanguageID(data, res);
    })

    // Adds a new category to the database
    app.post('/ramescategory/', function(req, res) {
      ramesCategory.create(req.body, res);
    });
    
    // Updates the category
    app.put('/ramescategory/', function(req, res) {
      ramesCategory.update(req.body, res);
    });
    
    // Deletes the category with the given id
    app.delete('/ramescategory/:id/', function(req, res) {
      ramesCategory.delete(req.params.id, res);
    });
    
    // -------------------------------
    // --------- report urls ---------
    // -------------------------------

    // --------------------------------------------
    // ---------------- reports -------------------
    // --------------------------------------------

    // Returns the info of a user with the given id
    app.get('/reports/:id/', function(req, res) {
      report.getReportByID(req.params.id, res);
    });

    // Returns the reports of a user with the given ID
    app.get('/reports/user/:userID/', function(req, res) {
      report.getReportsByUserID(req.params.token, res);
    });

    // Returns the reports of a user with the given id and of the report type with the given report type id
    app.get('/reports/user/:userID/type/:reportTypeID/', function(req, res) {
      var data = {
        userID : req.params.userID,
        reportTypeID : req.params.reportTypeID
      }
      report.getReportsByReportTypeID(data, res);
    });

    // Adds a new report to the database
    app.post('/reports/', function(req, res) {
      report.create(req.body, res);
    });

    // Updates the report
    app.put('/reports/', function(req, res) {
      report.update(req.body, res);
    });
    
    // Deletes the report with the given id
    app.delete('/reports/:id/', function(req, res) {
      report.delete(req.params.id, res);
    });

    // --------------------------------------------
    // ---------------- reports info --------------
    // --------------------------------------------

    // Returns a list of all report information
    app.get('/reportsinfo/', function(req, res) {
      reportInfo.get(res);
    });

    // Returns the info of a report information with the given id
    app.get('/reportsinfo/:id/', function(req, res) {
      reportInfo.getReportsInfoByID(req.params.id, res);
    });
    
    // Returns the info of a report information with the given report id
    app.get('/reportsinfo/report/:reportID', function(req, res) {
      reportInfo.getReportsInfoByReportID(req.params.reportID, res);
    });

    // Returns the info of a report information with the given question id
    app.get('/reportsinfo/question/:questionID', function(req, res) {
      reportInfo.getReportsInfoByQuestionID(req.params.reportID, res);
    });

    app.get('/reportsinfo/report/:reportID/question/:questionID', function(req, res) {
      var data = {
        reportID : req.params.reportID,
        questionID : req.params.questionID
      }
      reportInfo.getReportQuestionInfoByReportID(data, res);
    });
    
    // Adds a new report information to the database
    app.post('/reportsinfo/', function(req, res) {
      reportInfo.create(req.body, res);
    });
    
    // Updates the report information
    app.put('/reportsinfo/', function(req, res) {
      reportInfo.update(req.body, res);
    });
    
    // Deletes the report information with the given id
    app.delete('/reportsinfo/:id/', function(req, res) {
      reportInfo.delete(req.params.id, res);
    });

    // --------------------------------------------
    // --------------- reports type ---------------
    // --------------------------------------------

    // Returns a list of all report types
    app.get('/reporttype/', function(req, res) {
      reportType.get(res);
    });

    // Returns the info of a report type with the given id
    app.get('/reporttype/:id/', function(req, res) {
      reportType.getReportTypeByID(req.params.id, res);
    });
    // Returns the info of a report type with the given name
    app.get('/reporttype/name/:name', function(req, res) {
      reportType.getReportTypeByName(req.params.name, res);
    });

    // Adds a new report type to the database
    app.post('/reporttype/', function(req, res) {
      reportType.create(req.body, res);
    });
    
    // Updates the report type
    app.put('/reporttype/', function(req, res) {
      reportType.update(req.body, res);
    });
    
    // Deletes the report type with the given id
    app.delete('/reporttype/:id/', function(req, res) {
      reportType.delete(req.params.id, res);
    });


    // ---------------------------------
    // --------- language urls ---------
    // ---------------------------------

    // Returns a list of all languages
    app.get('/language/', function(req, res) {
      language.get(res);
    });

    // Returns the info of a language with the given id
    app.get('/language/:id/', function(req, res) {
      language.getLanguageByID(req.params.id, res);
    });

    // Returns the info of a language with the given name
    app.get('/language/name/:name', function(req, res) {
      language.getLanguageByName(req.params.name, res);
    });

    // Adds a new language to the database
    app.post('/language/', function(req, res) {
      language.create(req.body, res);
    });
    
    // Updates the language
    app.put('/language/', function(req, res) {
      language.update(req.body, res);
    });
    
    // Deletes the language with the given id
    app.delete('/language/:id/', function(req, res) {
      language.delete(req.params.id, res);
    });
  }
};
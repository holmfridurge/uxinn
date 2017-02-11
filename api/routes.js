var user = require('./Models/users');

var report = require('./Models/reports');
var reportType = require('./Models/reports_type');
var reportInfo = require('./Models/reports_info');

var ramesInfo = require('./Models/rames_info');
var ramesQuestion = require('./Models/rames_questions');
var ramesCategory = require('./Models/rames_category');

var language = require('./Models/languages');

module.exports = {
  configure: function(app) {
    // -----------------------------
    // --------- user urls ---------
    // -----------------------------
    // Returns a list of all users
    app.get('/api/user/', function(req, res) {
      user.get(res);
    });

    // Returns the info of a user with the given id
    app.get('/api/user/:id/', function(req, res) {
      user.getUserByID(req.params.id, res);
    });

    // Adds a new user to the database
    app.post('/api/user/', function(req, res) {
      user.create(req.body, res);
    });
    
    // Updates the user
    app.put('/api/user/', function(req, res) {
      user.update(req.body, res);
    });
    
    // Deletes the user with the given id
    app.delete('/api/user/:id/', function(req, res) {
      user.delete(req.params.id, res);
    });

    // Returns the user with the given token
    app.get('/api/token/:token/', function(req, res) {
      user.getUserByToken(req.params.token, res);
    });

    // ------------------------------
    // --------- rames urls ---------
    // ------------------------------
    
    // --------------------------------------------
    // ---------------- rames info ----------------
    // --------------------------------------------
    app.get('/api/ramesinfo/', function(req, res) {
      ramesInfo.get(res);
    });

    app.get('/api/ramesinfo/:id/', function(req, res) {
      ramesInfo.getRamesInfoByID(req.params.id, res);
    });

    app.get('/api/ramesinfo/category/:categoryId', function(req, res) {
      ramesInfo.getRamesInfoByCategoryID(req.params.categoryId, res);
    });

    app.get('/api/ramesinfo/language/:languageId', function(req, res) {
      ramesInfo.getRamesInfoByLanguageID(req.params.languageId, res);
    });

    // Adds a new report to the database
    app.post('/api/ramesinfo/', function(req, res) {
      ramesInfo.create(req.body, res);
    });

    // Updates the user
    app.put('/api/ramesinfo/', function(req, res) {
      ramesInfo.update(req.body, res);
    });
    
    // Deletes the user with the given id
    app.delete('/api/ramesinfo/:id/', function(req, res) {
      ramesInfo.delete(req.params.id, res);
    });

    // --------------------------------------------
    // -------------- rames picture ---------------
    // --------------------------------------------
    // DO LATER

    // --------------------------------------------
    // -------------- rames questions -------------
    // --------------------------------------------

    app.get('/api/ramesquestion/', function(req, res) {
      ramesQuestion.get(res);
    });

    app.get('/api/ramesquestion/:id/', function(req, res) {
      ramesQuestion.getRamesQuestionByID(req.params.id, res);
    });

    app.get('/api/ramesquestion/category/:categoryId', function(req, res) {
      ramesQuestion.getRamesQuestionByCategoryID(req.params.categoryId, res);
    });

    app.get('/api/ramesquestion/language/:languageId', function(req, res) {
      ramesQuestion.getRamesQuestionByLanguageID(req.params.languageId, res);
    });

    // Adds a new report to the database
    app.post('/api/ramesquestion/', function(req, res) {
      ramesQuestion.create(req.body, res);
    });

    // Updates the user
    app.put('/api/ramesquestion/', function(req, res) {
      ramesQuestion.update(req.body, res);
    });
    
    // Deletes the user with the given id
    app.delete('/api/ramesquestion/:id/', function(req, res) {
      ramesQuestion.delete(req.params.id, res);
    });

    // --------------------------------------------
    // -------------- rames category --------------
    // --------------------------------------------
    // Returns a list of all categories
    app.get('/api/ramescategory/', function(req, res) {
      ramesCategory.get(res);
    });

    // Returns the category with the given id
    app.get('/api/ramescategory/:id/', function(req, res) {
      ramesCategory.getRamesCategoryByID(req.params.id, res);
    });

    // Returns all categories with given language
    app.get('/api/ramescategory/language/:languageid/', function(req, res) {
      ramesCategory.getAllRamesCategoryByLanguageID(req.params.languageid, res);
    });

    app.get('/api/ramescategory/:id/language/:languageid/', function(req, res) {
      var data = {
        id: req.params.id,
        languageID: req.params.languageid
      }
      ramesCategory.getRamesCategoryByLanguageID(data, res);
    })

    // Adds a new category to the database
    app.post('/api/ramescategory/', function(req, res) {
      ramesCategory.create(req.body, res);
    });
    
    // Updates the category
    app.put('/api/ramescategory/', function(req, res) {
      ramesCategory.update(req.body, res);
    });
    
    // Deletes the category with the given id
    app.delete('/api/ramescategory/:id/', function(req, res) {
      ramesCategory.delete(req.params.id, res);
    });
    
    // -------------------------------
    // --------- report urls ---------
    // -------------------------------

    // --------------------------------------------
    // ---------------- reports -------------------
    // --------------------------------------------

    // Returns the info of a user with the given id
    app.get('/api/reports/:id/', function(req, res) {
      report.getReportByID(req.params.id, res);
    });

    // Returns the reports of a user with the given ID
    app.get('/api/reports/user/:userID/', function(req, res) {
      report.getReportsByUserID(req.params.token, res);
    });

    // Returns the reports of a user with the given id and of the report type with the given report type id
    app.get('/api/reports/user/:userID/type/:reportTypeID/', function(req, res) {
      var data = {
        userID : req.params.userID,
        reportTypeID : req.params.reportTypeID
      }
      report.getReportsByReportTypeID(data, res);
    });

    // Adds a new report to the database
    app.post('/api/reports/', function(req, res) {
      report.create(req.body, res);
    });

    // Updates the report
    app.put('/api/reports/', function(req, res) {
      report.update(req.body, res);
    });
    
    // Deletes the report with the given id
    app.delete('/api/reports/:id/', function(req, res) {
      report.delete(req.params.id, res);
    });

    // --------------------------------------------
    // ---------------- reports info --------------
    // --------------------------------------------

    // Returns a list of all report information
    app.get('/api/reportsinfo/', function(req, res) {
      reportInfo.get(res);
    });

    // Returns the info of a report information with the given id
    app.get('/api/reportsinfo/:id/', function(req, res) {
      reportInfo.getReportsInfoByID(req.params.id, res);
    });
    
    // Returns the info of a report information with the given report id
    app.get('/api/reportsinfo/report/:reportID', function(req, res) {
      reportInfo.getReportsInfoByReportID(req.params.reportID, res);
    });

    // Returns the info of a report information with the given question id
    app.get('/api/reportsinfo/question/:questionID', function(req, res) {
      reportInfo.getReportsInfoByQuestionID(req.params.reportID, res);
    });

    app.get('/api/reportsinfo/report/:reportID/question/:questionID', function(req, res) {
      var data = {
        reportID : req.params.reportID,
        questionID : req.params.questionID
      }
      reportInfo.getReportQuestionInfoByReportID(data, res);
    });
    
    // Adds a new report information to the database
    app.post('/api/reportsinfo/', function(req, res) {
      reportInfo.create(req.body, res);
    });
    
    // Updates the report information
    app.put('/api/reportsinfo/', function(req, res) {
      reportInfo.update(req.body, res);
    });
    
    // Deletes the report information with the given id
    app.delete('/api/reportsinfo/:id/', function(req, res) {
      reportInfo.delete(req.params.id, res);
    });

    // --------------------------------------------
    // --------------- reports type ---------------
    // --------------------------------------------

    // Returns a list of all report types
    app.get('/api/reporttype/', function(req, res) {
      reportType.get(res);
    });

    // Returns the info of a report type with the given id
    app.get('/api/reporttype/:id/', function(req, res) {
      reportType.getReportTypeByID(req.params.id, res);
    });
    // Returns the info of a report type with the given name
    app.get('/api/reporttype/name/:name', function(req, res) {
      reportType.getReportTypeByName(req.params.name, res);
    });

    // Adds a new report type to the database
    app.post('/api/reporttype/', function(req, res) {
      reportType.create(req.body, res);
    });
    
    // Updates the report type
    app.put('/api/reporttype/', function(req, res) {
      reportType.update(req.body, res);
    });
    
    // Deletes the report type with the given id
    app.delete('/api/reporttype/:id/', function(req, res) {
      reportType.delete(req.params.id, res);
    });


    // ---------------------------------
    // --------- language urls ---------
    // ---------------------------------

    // Returns a list of all languages
    app.get('/api/language/', function(req, res) {
      language.get(res);
    });

    // Returns the info of a language with the given id
    app.get('/api/language/:id/', function(req, res) {
      language.getLanguageByID(req.params.id, res);
    });
    // Returns the info of a language with the given name

    app.get('/api/language/name/:name', function(req, res) {
      language.getLanguageByName(req.params.name, res);
    });

    // Adds a new language to the database
    app.post('/api/language/', function(req, res) {
      language.create(req.body, res);
    });
    
    // Updates the language
    app.put('/api/language/', function(req, res) {
      language.update(req.body, res);
    });
    
    // Deletes the language with the given id
    app.delete('/api/language/:id/', function(req, res) {
      language.delete(req.params.id, res);
    });
  }
};
'use strict';

describe('Controller: NewreportCtrl', function () {

  // load the controller's module
  beforeEach(module('ramesApp'));

  var NewreportCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewreportCtrl = $controller('NewreportCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewreportCtrl.awesomeThings.length).toBe(3);
  });
});

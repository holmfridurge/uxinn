'use strict';

describe('Controller: AboutcreatorCtrl', function () {

  // load the controller's module
  beforeEach(module('ramesApp'));

  var AboutcreatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutcreatorCtrl = $controller('AboutcreatorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutcreatorCtrl.awesomeThings.length).toBe(3);
  });
});

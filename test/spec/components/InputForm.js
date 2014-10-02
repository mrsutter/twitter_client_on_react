'use strict';

describe('InputForm', function () {
  var InputForm, component;

  beforeEach(function () {
    InputForm = require('../../../src/scripts/components/InputForm.jsx');
    component = InputForm();
  });

  it('should create a new instance of InputForm', function () {
    expect(component).toBeDefined();
  });
});

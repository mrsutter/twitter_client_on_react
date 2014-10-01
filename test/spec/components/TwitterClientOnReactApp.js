'use strict';

describe('Main', function () {
  var TwitterClientOnReactApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    TwitterClientOnReactApp = require('../../../src/scripts/components/TwitterClientOnReactApp.jsx');
    component = TwitterClientOnReactApp();
  });

  it('should create a new instance of TwitterClientOnReactApp', function () {
    expect(component).toBeDefined();
  });
});

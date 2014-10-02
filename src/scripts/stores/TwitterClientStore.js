var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TwitterClientConstants = require('../constants/TwitterClientConstants');


var TwitterClientStore = merge(EventEmitter.prototype, {
});

module.exports = TwitterClientStore;
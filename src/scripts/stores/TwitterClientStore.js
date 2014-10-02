'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TwitterClientConstants = require('../constants/TwitterClientConstants');
var OAuth = require('oauth');
var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/requesttoken',
  'https://api.twitter.com/oauth/accesstoken',
  'pFtPOLUXBXDtPHokigyXN9UAT',
  'FlGNi9fhU2q3Ucfi5M9czBraY3QxEkPflLntLJgrBjA0ecMpon',
  '1.0A',
  null,
  'HMAC-SHA1'
);
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var _twits = [];

function searchTwits(query) {
    oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=' + query + '&resulttype=recent',
      '978792919-URT380OU0ofxqomr8hUPXOxgoJAMRqUODAGQEdoQ', //test user token
      '4Gx37DpzwwVcBszGP51hUwegmuFnSsxUZ9IbuizUbbfMW', //test user secret
      function (e, data, res){
        if (e) console.error(e);
        var twits = JSON.parse(data);
        setTwits(twits["statuses"]);
      });
}

function setTwits(twits) {
  _twits = twits || [];
  TwitterClientStore.emitChange();
}

var TwitterClientStore = merge(EventEmitter.prototype, {
  getAll: function () {
    return _twits;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

// Register to handle all updates
AppDispatcher.register(function(payload) {

  var action = payload.action;

  switch(action.actionType) {
    case TwitterClientConstants.SEARCH_TWITS:
      searchTwits(action.query);
      break;

    default:
      return true;
  }

  // This often goes in each case that should trigger a UI change. This store
  // needs to trigger a UI change after every view action, so we can make the
  // code less repetitive by putting it here.  We need the default case,
  // however, to make sure this only gets called after one of the cases above.
  //TwitterClientStore.emitChange();

  return true; // No errors.  Needed by promise in Dispatcher.
});

module.exports = TwitterClientStore;

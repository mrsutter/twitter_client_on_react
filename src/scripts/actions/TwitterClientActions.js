'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TwitterClientConstants = require('../constants/TwitterClientConstants');
var TwitterClient = require('../utils/TwitterClient');

var TwitterClientActions = {
  searchTwits: function (query) {
    TwitterClient.search(query).then(function (twits) {
      AppDispatcher.handleViewAction({
        actionType: TwitterClientConstants.SET_TWITS,
        twits: twits
      });
    });
  },
};

module.exports = TwitterClientActions;

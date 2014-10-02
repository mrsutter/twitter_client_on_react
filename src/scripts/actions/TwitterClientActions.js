'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TwitterClientConstants = require('../constants/TwitterClientConstants');

var TwitterClientActions = {
  searchTwits: function (query) {
    AppDispatcher.handleViewAction({
      actionType: TwitterClientConstants.SEARCH_TWITS,
      query: query
    });
  },
};

module.exports = TwitterClientActions;

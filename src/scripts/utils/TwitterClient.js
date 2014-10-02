'use strict';

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

var TwitterClient = {
  search: function (query, callback) {
    oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=' + encodeURIComponent(query) + '&resulttype=recent',
      '978792919-URT380OU0ofxqomr8hUPXOxgoJAMRqUODAGQEdoQ', //test user token
      '4Gx37DpzwwVcBszGP51hUwegmuFnSsxUZ9IbuizUbbfMW', //test user secret
      function (e, data, res){
        if (e) console.error(e);
        var twits = JSON.parse(data);
        callback(twits["statuses"]);
      });
  },
};

module.exports = TwitterClient;

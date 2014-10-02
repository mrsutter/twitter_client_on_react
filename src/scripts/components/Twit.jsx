/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Twit.css');

var Twit = React.createClass({
  render: function () {
    return (
        <div>
          <h3>@{this.props.twit.user.screen_name}</h3>
          <p>{this.props.twit.text}</p>
        </div>
      );
  }
});

module.exports = Twit;

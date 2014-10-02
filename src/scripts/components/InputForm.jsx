/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/InputForm.css');
var TwitterClientActions = require('../actions/TwitterClientActions');

var InputForm = React.createClass({

  getInitialState: function () {
    return { value: "" };
  },

  render: function () {
    return (
        <div className="input-group">
          <input type="text" className="form-control" value={this.state.value} onChange={this._onInputChange}/>
          <span className="input-group-btn">
            <input type="button" value="Go" className="btn" onClick={this._onGo}/>
          </span>
        </div>
      );
  },

  _onInputChange: function (e) {
    this.setState({value: e.target.value});
  },

  _onGo: function (e) {
    TwitterClientActions.searchTwits(this.state.value);
  },
});

module.exports = InputForm;

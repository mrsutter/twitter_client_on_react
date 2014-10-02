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
      <form onSubmit={this._onSubmit}>
        <div className="input-group">
          <input type="text" className="form-control" value={this.state.value} onChange={this._onInputChange}/>
          <span className="input-group-btn">
            <input type="submit" value="Go" className="btn"/>
          </span>
        </div>
      </form>
      );
  },

  _onInputChange: function (e) {
    this.setState({value: e.target.value});
  },

  _onSubmit: function (e) {
    e.preventDefault();
    TwitterClientActions.searchTwits(this.state.value);
  },
});

module.exports = InputForm;

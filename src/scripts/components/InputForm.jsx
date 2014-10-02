/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/InputForm.css');

var InputForm = React.createClass({
  render: function () {
    return (
        <div className="input-group">
          <input type="text" className="form-control"/>
          <span className="input-group-btn">
            <input type="button" value="Go" className="btn"/>
          </span>
        </div>
      );
  }
});

module.exports = InputForm;

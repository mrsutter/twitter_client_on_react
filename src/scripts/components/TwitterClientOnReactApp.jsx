/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');


var imageURL = require('../../images/yeoman.png');

var TwitterClientOnReactApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <div className="input-group">
          <input type="text" className="form-control"/>
          <span className="input-group-btn">
            <input type="button" value="Go" className="btn"/>
          </span>
        </div>
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = TwitterClientOnReactApp;

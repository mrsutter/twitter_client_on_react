/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var InputForm = require('./InputForm');
var TwitterClientStore = require('../stores/TwitterClientStore');
var Twit = require('./Twit');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');


var imageURL = require('../../images/yeoman.png');

var TwitterClientOnReactApp = React.createClass({

  getInitialState: function () {
    return {
      twits: []
    };
  },

  componentDidMount: function() {
    TwitterClientStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TwitterClientStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div className='main'>
        <InputForm/>
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
        {this.state.twits.map(function (twit) {
          return <Twit twit={twit}/>
        })}
      </div>
    );
  },

  _onChange: function () {
    this.setState({twits: TwitterClientStore.getAll()});
  },

});

module.exports = TwitterClientOnReactApp;

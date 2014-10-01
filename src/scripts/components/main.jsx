/** @jsx React.DOM */

var TwitterClientOnReactApp = require('./TwitterClientOnReactApp');
var React = require('react');
//var {DefaultRoute, Route, Routes} = require('react-router');

//React.renderComponent((
  //<Routes location="history">
    //<Route path="/" handler={TwitterClientOnReactApp}>
    //</Route>
  //</Routes>
//), document.getElementById('content'));

React.renderComponent(
  <TwitterClientOnReactApp/>,
  document.getElementById('content'));

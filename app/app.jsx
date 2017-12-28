var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var LoginContainer = require('./components/LoginContainer');
var store = require('./store/ConfigureStore').configure();

ReactDOM.render(
  <Provider store={store}>
    <LoginContainer/>
  </Provider>,
  document.getElementById('app')
);

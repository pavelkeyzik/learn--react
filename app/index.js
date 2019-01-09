import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(App, {
    appName: 'FirstApp',
    appVersion: '1.0 Beta (Learn only)',
  }, null),
), document.getElementById('root'));

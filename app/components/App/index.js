import React from 'react';

const App = (props) => React.createElement(
  'div',
  null,
  'Check for error... Application Component. You are in ',
  React.createElement(
    'mark',
    null,
    props.appName,
  ),
  ' and you have ',
  React.createElement(
    'mark',
    null,
    props.appVersion,
  ),
  ' version.',
);

export default React.memo(App);

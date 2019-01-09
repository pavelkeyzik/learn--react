import React from 'react';

const sum = (a, b) => a + b;
const sum1 = (a, b) => a + b;
const sum2 = (a, b) => a + b;

const App = (props) => React.createElement(
  'div',
  null,
  'Application Component. You are in ',
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

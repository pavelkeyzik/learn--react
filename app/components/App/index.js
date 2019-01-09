import React from 'react';

const App = (props) => React.createElement(
  'div',
  null,
  `Application Component. You're in ${props.appName} and you have ${props.appVersion} version.`,
);

export default React.memo(App);

import React from 'react';
import GreetingContainer from './greeting/greeting_container';

export default ({ children }) => {
  return (
    <div>
      <h1>Wego</h1>
      <GreetingContainer />
      { children }
    </div>
  );
};

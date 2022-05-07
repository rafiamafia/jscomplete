// Starting point for React application
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <h2> Hello React </h2>;
};

// The ReactDOM.render() function takes two arguments,
// HTML code and an HTML element.
// The purpose of the function is to display the specified
// HTML code inside the specified HTML element.
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

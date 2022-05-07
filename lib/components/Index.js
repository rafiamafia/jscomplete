// Starting point for React application
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const [inputText, setInputText] = useState("");

  return <div><input
    onChange={(e) => {
      setInputText(e.target.value)
    }}
    placeholder="Enter text here" />
    <br />
    {inputText}
    </div>
};

// The ReactDOM.render() function takes two arguments,
// HTML code and an HTML element.
// The purpose of the function is to display the specified
// HTML code inside the specified HTML element.
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

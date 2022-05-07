// Starting point for React application
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  //its common to have multiple useState calls
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);

  return <div><input
    onChange={(e) => {
      setInputText(e.target.value);
      setHistoryList([...historyList, e.target.value]);
    }}
    placeholder="Enter text here" /> <br />
    {inputText}
    <hr /><br />
    <ul>
      {historyList.map((rec) => {
        return <div>{rec}</div>
      })}
    </ul>
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

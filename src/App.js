import React from 'react';
import logo from './logo.svg';
import './App.css';

let numb = 1;
let flag = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{color: 'red'}}>
          Edit <code>src/App.js</code> and save to reload.
          <p>{numb}</p>
          <p>{2 + 2}</p>
          <p>{flag && "It's true"}</p>
          <p>{flag ? "It's too true" : "Wow! It's not true!"}</p>
          <p>{undefined}</p>
          <p>{null}</p>
          <p>{false}</p>
          <p>{true}</p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

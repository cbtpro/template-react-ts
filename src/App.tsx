import React from 'react';
import { env, npmPackageVersion } from './utils';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>npm package version: {npmPackageVersion}</div>
        <div>env: {env}</div>
      </header>
    </div>
  );
}

export default App;

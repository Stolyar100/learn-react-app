import React from 'react';
import TaskSelector from './TaskSelector';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TaskSelector />
    </div>
  );
}

export default App;

// src/App.js
import React from 'react';
import CounterComponent from './components/CounterComponent';
import UserComponent from './components/UserComponent';
import './components/styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterComponent />
        <UserComponent />
      </header>
    </div>
  );
}

export default App;

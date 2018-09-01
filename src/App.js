import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Quickly</h1>
        </header>
        <ol className="Projects">
          <li><a href="/chapter09">Chapter 09. Menu Component</a></li>
          <li><a href="/chapter10">Chapter 10. Tooltip Component</a></li>
          <li><a href="/chapter11">Chapter 11. Timer Component</a></li>
        </ol>
      </div>
    );
  }
}

export default App;

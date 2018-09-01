import React, { Component } from 'react';
import TimerWrapper from './TimerWrapper';

class Chapter11 extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Quickly - Chapter 11. Timer Component</h1>
        </header>
        <TimerWrapper />
      </div>
    );
  }
}

export default Chapter11;

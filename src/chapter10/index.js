import React, { Component } from 'react';
import Tooltip from './Tooltip';

class Chapter10 extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
        <header className="App-header">
          <h1 className="App-title">React Quickly - Chapter 10. Tooltip Component</h1>
        </header>
        <Tooltip text="The book you're reading now">React Quickly</Tooltip> was published in 2017. It's awesome!
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
      </div>
    );
  }
}

export default Chapter10;

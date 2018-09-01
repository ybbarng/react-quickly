import React, { Component } from 'react';

class Timer extends Component {
  render() {
    if (this.props.timeLeft === 0) {
      document.getElementById(this.props.audio).play();
    }
    if (!this.props.timeLeft) {
      return <div />
    }
    return (
      <h1>Time left: {this.props.timeLeft} </h1>
    );
  }
}

export default Timer;

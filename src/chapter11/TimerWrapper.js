import React, { Component } from 'react';
import alarm from './flute_c_long_01.wav';
import Button from './Button';
import Timer from './Timer';

class TimerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: null,
      timer: null
    }
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer(timeLeft) {
    clearInterval(this.state.timer);
    const timer = setInterval(() => {
      const timeLeft = this.state.timeLeft - 1;
      if (timeLeft === 0) {
        clearInterval(timer);
      }
      this.setState({
        timeLeft: timeLeft
      });
    }, 1000);
    this.setState({
      timeLeft,
      timer
    });
  }

  render() {
    const alarmId = 'end-of-time';
    return (
      <div className="row-fluid">
        <h2>Timer</h2>
        <div className="btn-group" role="group">
          <Button time="5" startTimer={this.startTimer} />
          <Button time="10" startTimer={this.startTimer} />
          <Button time="15" startTimer={this.startTimer} />
        </div>
        <Timer timeLeft={this.state.timeLeft} audio={alarmId} />
        <audio id={alarmId} src={alarm} prelaod="auto" />
      </div>
    );
  }
}

export default TimerWrapper;

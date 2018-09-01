import React from 'react';

const Timer = (props) => {
  if (props.timeLeft === 0) {
    document.getElementById(props.audio).play();
  }
  if (!props.timeLeft) {
    return <div />
  }
  return (
    <h1>Time left: {props.timeLeft} </h1>
  );
};

export default Timer;

import React from 'react';
import sound from './flute_c_long_01.wav';

const TimerSound = (props) => {
  const alarmId = 'end-of-time';
  if (props.play) {
    document.getElementById(alarmId).play();
  }
  return <audio id={alarmId} src={sound} preload="auto" />
};

export default TimerSound;

import React from 'react';
import './Timer.css';
import Face from './Face.js';
import SetTime from './SetTime.js';

export default class Timer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      timerSetting: 30,
      remainingTime: 5000,
      lastTick: null,
      running: false,
      setting: false
    };
  }

  startTimer = () => {
    let timer = setInterval(this.tick, 100);
    const now = Date.now();
    this.setState({
      timer,
      lastTick: now,
      running:true
    });
  }

  stopTimer = () => {
    clearInterval(this.state.timer);
    this.setState({
      timer: null,
      lastTick: null,
      running: false
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  tick = () => {
    const now = Date.now();
    const remainingTime = this.state.remainingTime - (now - this.state.lastTick);
    this.setState({
      remainingTime,
      lastTick: now
    });
  }

  onPressStart = () => {
    this.state.running ? this.stopTimer() : this.startTimer();
  }

  onPressReset = () => {
    this.stopTimer();
    this.setState({
      remainingTime: this.state.timerSetting * 1000,
      lastTick: null,
      running: false
    });
  }

  clickFace = () => {
    console.log('face clicked');
    this.stopTimer();
    this.setState({
      setting: true
    });
  }

  setTimer = (seconds) => {
    this.setState({
      remainingTime: seconds * 1000,
      lastTick: null,
      running: false,
      setting: false
    });
  }

  render() {
    const totalSecondsRemaining = Math.floor(this.state.remainingTime / 1000);

    return (
      <div className="pageContainer">
        <div className="appContainer">
          <h2>Back to work in:</h2>
          {
            this.state.setting ? 
            <SetTime seconds={totalSecondsRemaining} setTimer={this.setTimer} /> : 
            <Face seconds={totalSecondsRemaining} click={this.clickFace} />
          }
          <div>
            <button onClick={this.onPressStart} className="startButton">
              {this.state.running ? 'Pause' : 'Start'}
            </button>
          </div>
          <div>
            <button onClick={this.onPressReset} className="resetButton">
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}



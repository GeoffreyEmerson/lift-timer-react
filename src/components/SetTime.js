import React from 'react';
import './SetTime.css';

export default class SetTime extends React.Component {
  
  handleSubmit(e) {
    e.preventDefault();

  }

  render() {
    const minutesCount = Math.floor( Math.abs(this.props.seconds / 60) );
    const secondsCount = Math.abs( this.props.seconds ) - (60 * minutesCount);

    // quick and dirty formatting for seconds
    let secondDisplay;
    if (secondsCount < 10) {
      secondDisplay = '0' + secondsCount;
    } else {
      secondDisplay = secondsCount;
    }

    return (
      <div className="timerContainter">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder={minutesCount} size="3" className="text" autoFocus/>
          :
          <input type="text" placeholder={secondDisplay} size="3"  className="text"/>
        </form>
      </div>
    )
  }
}
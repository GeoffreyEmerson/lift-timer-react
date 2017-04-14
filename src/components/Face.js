import React from 'react';
import './Face.css';

export default class Face extends React.Component {

  render() {
    const negative = (0 > this.props.seconds);
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
      <div className="timerContainter" onClick={this.props.click} >
        <span className="text">
          {negative ? '-' : ''}
          {minutesCount}:{secondDisplay}
        </span>
      </div>
    )
  }
}
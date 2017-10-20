import React, { Component } from 'react';
import Formatter from '../../utils/formatter.js';
import './status.css';

class Status extends Component {
  render() {
    let current = this.props.current;
    let city = this.props.city;

    if (!current.dt) {
      return null;
    }

    let weather = current.weather[0];
    let date = Formatter.Date.getWeekDay(current.dt);
    let time = Formatter.Date.getHoursMinutes(current.dt);

    return (
      <div className="status">
        <h1>{city.name}, {city.country}</h1>
        <p>{date} {time}</p>
        <p>{weather.description}</p>
      </div>
    );
  }
}

export default Status;

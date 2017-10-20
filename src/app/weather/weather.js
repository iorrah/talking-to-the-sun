import React, { Component } from 'react';
import './weather.css';
import Status from '../status/status.js';
import Current from '../current/current.js';
import Aside from '../aside/aside.js';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
      weathers: [],
    }
  }

  render() {
    return (
      <div className="weather container">
        <Status />
        <Current />
        <Aside />
      </div>
    );
  }
}

export default Weather;

import React, { Component } from 'react';
import './weather.css';
import Status from '../status/status.js';
import Current from '../current/current.js';
import Aside from '../aside/aside.js';
import weather from '../../data/weather.js';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: {},
      current: {},
      weathers: [],
      units: {
        celsius: true,
        fahrenheit: false,
      }
    }
  }

  componentDidMount() {
    let city = weather.city;
    let weathers = weather.list.slice(0, 7);
    let current = weathers[0];
    this.setState({ city, current, weathers });
  }

  falseAllUnits() {
    let newUnits = this.state.units;
    let arr = Object.keys(newUnits);

    for (let index in arr) {
      let unit = arr[index];
      newUnits[unit] = false;
    }

    return this.setState({ units: newUnits });
  }

  setUnit(unit) {
    this.falseAllUnits();

    return this.setState({
      units: { ...this.state.units, [unit]: true }
    });
  }

  setCurrent(item) {
    return this.setState({ current: item });
  }

  render() {
    let city = this.state.city;
    let units = this.state.units;
    let current = this.state.current;
    let weathers = this.state.weathers;

    return (
      <div className="weather container">
        <Status city={city} current={current} />

        <Current
          units={units}
          current={current}
          onClick={(unit) => this.setUnit(unit)} />

        <Aside
          units={units}
          current={current}
          weathers={weathers}
          onClick={(item) => this.setCurrent(item)} />
      </div>
    );
  }
}

export default Weather;

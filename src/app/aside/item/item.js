import React, { Component } from 'react';
import Conversor from '../../../utils/conversor.js';
import Formatter from '../../../utils/formatter.js';
import getPresentableDetails from '../../../utils/get-presentable-item.js';

class Item extends Component {
  render() {
    let item = this.props.item;
    let presentable = getPresentableDetails(item, this.props.units);

    return (
      <li onClick={this.props.onClick} className={this.props.is_active ? 'active' : ''}>
        <div className="content">
          <p className="date">{Formatter.Date.getWeekDayAbbr(item.dt)}</p>

          <img src="images/icons/sunny.png" alt="" />

          <p className="degrees">
            <span className={presentable.celsius_class}>
              {Conversor.tKelvin2tCelcius(item.main.temp)}°
            </span>

            <span className={presentable.fahrenheit_class}>
              {Conversor.tKelvin2tFahrenheit(item.main.temp)}°
            </span>
          </p>
        </div>
      </li>
    );
  }
}

export default Item;

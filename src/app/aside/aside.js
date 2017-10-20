import React, { Component } from 'react';
import AsideItem from './item/item.js';
import './aside.css';

class Aside extends Component {
  previousExample() {
    return {
      "id": 1,
      "date": "Wed",
      "celcius": 16,
      "fahrenheit": 10,
    }
  }

  checkIfisActive(item) {
    return item.dt === this.props.current.dt;
  }

  render() {
    let weathers = this.props.weathers;
    let current = this.props.current;
    let units = this.props.units;

    return (
      <div className="aside">
        <ul>
          {weathers.map((item) =>
            <AsideItem
              item={item}
              units={units}
              key={item.dt}
              current={current}
              is_active={this.checkIfisActive(item)}
              onClick={() => this.props.onClick(item)} />
          )}
        </ul>
      </div>
    );
  }
}

export default Aside;

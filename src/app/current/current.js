import React, { Component } from 'react';
import getPresentableDetails from '../../utils/get-presentable-item.js';
import './current.css';

class Current extends Component {
  render() {
    let current = this.props.current;

    if (!current || !current.dt) {
      return null;
    }

    let presentable = getPresentableDetails(current, this.props.units);

    return (
      <div className="current">
        <h1>
          <img src="images/icons/sunny.png" alt="" />
          {presentable.temperature}

          <sup>
            <a
              className={presentable.celsius_class}
              onClick={() => this.props.onClick('celsius')}>
              °C
            </a>

            |

            <a
              className={presentable.fahrenheit_class}
              onClick={() => this.props.onClick('fahrenheit')}>
              °F
            </a>
          </sup>
        </h1>
      </div>
    );
  }
}

export default Current;

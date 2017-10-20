import React, { Component } from 'react';
import './current.css';

class Current extends Component {
  render() {
    return (
      <div className="current">
        <h1>
          <img src="images/icons/sunny.png" alt="" />
          16 <sup>°C | <a>°F</a></sup>
        </h1>
      </div>
    );
  }
}

export default Current;

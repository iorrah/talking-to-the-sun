import React, { Component } from 'react';
import './section.css';

class Section extends Component {
  render() {
    return (
      <div className="section">
        <h1>
          <img src="images/icons/sunny.png" alt="" />
          16 <sup>°C | <a>°F</a></sup>
        </h1>
      </div>
    );
  }
}

export default Section;

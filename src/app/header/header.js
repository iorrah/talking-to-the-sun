import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>10787 Berlin</h1>
        <p>Wednesday 12:00</p>
        <p>Mostly Cloudy</p>
      </div>
    );
  }
}

export default Header;

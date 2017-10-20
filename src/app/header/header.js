import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header container">
        <a href="/">
          <h1>
            Talking to the <span>sun</span>
          </h1>
        </a>
      </div>
    );
  }
}

export default Header;

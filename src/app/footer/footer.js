import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer container">
        <p>
          <a href="https://github.com/iorrah/talking-to-the-sun" target="_blank" rel="noopener noreferrer">
            Fork this project on GitHub
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;

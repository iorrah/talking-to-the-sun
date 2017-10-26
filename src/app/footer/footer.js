import React, { Component } from 'react';
import { FaHeart } from 'react-icons/lib/fa';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer container">
        <p>
          This is a

          <a
            href="https://en.wikipedia.org/wiki/Work_in_process"
            target="_blank"
            rel="noopener noreferrer">
            WIP
          </a>

          project but you can still

          <a
            href="https://github.com/iorrah/talking-to-the-sun"
            target="_blank"
            rel="noopener noreferrer">
            fork
          </a>

          it on GitHub <FaHeart />
        </p>
      </div>
    );
  }
}

export default Footer;

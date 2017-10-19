import React, { Component } from 'react';
import './app.css';
import Header from './app/header/header.js';
import Section from './app/section/section.js';
import Aside from './app/aside/aside.js';
import Footer from './app/footer/footer.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Section />
        <Aside />
        <Footer />
      </div>
    );
  }
}

export default App;

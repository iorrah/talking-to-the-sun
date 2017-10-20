import React, { Component } from 'react';
import './app.css';
import Header from './app/header/header.js';
import Weather from './app/weather/weather.js';
import Footer from './app/footer/footer.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Weather />
        <Footer />
      </div>
    );
  }
}

export default App;

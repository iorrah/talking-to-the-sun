import React, { Component } from 'react';
import './aside.css';

class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    let items = [
      {
        id: 1,
        date: 'Wed',
        celcius: 16,
        fahrenheit: 10,
      },
      {
        id: 2,
        date: 'Wed',
        celcius: 16,
        fahrenheit: 10,
      },
      {
        id: 3,
        date: 'Wed',
        celcius: 16,
        fahrenheit: 10,
      },
      {
        id: 4,
        date: 'Wed',
        celcius: 16,
        fahrenheit: 10,
      },
      {
        id: 4,
        date: 'Wed',
        celcius: 16,
        fahrenheit: 10,
      },
      {
        id: 4,
        date: 'Wed',
        celcius: 16,
        fahrenheit: 10,
      },
      {
        id: 4,
        date: 'Wed',
        celcius: 16,
        fahrenheit: 10,
      },
    ];

    this.setState({ items });
  }

  render() {
    var items = this.state.items;

    return (
      <div className="aside">
        <ul>
          {items.map((item) =>
            <li key={item.id}>
              <div className="content">
                <p className="date">{item.date}</p>

                <img src="images/icons/sunny.png" alt="" />

                <p className="degrees">
                  {item.celcius}°
                  <span>{item.fahrenheit}°</span>
                </p>
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Aside;

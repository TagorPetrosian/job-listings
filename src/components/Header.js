import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '00:00:00',
      ip: '0.0.0.0',
      language: 'en-US'
    };
  }

  async componentDidMount() {
    try {
      setInterval(async () => {
        const timeResponse = await fetch('http://time.jsontest.com');
        const timeJson = await timeResponse.json();

        this.setState({
          time: timeJson.time.slice(0, -2)
        });
      }, 1000);
    } catch (e) {
      console.log(e);
    }

    const ipResponse = await fetch('http://ip.jsontest.com');

    const headersResponse = await fetch('http://headers.jsontest.com');

    const ipJson = await ipResponse.json();
    const headersJson = await headersResponse.json();
    const language = headersJson['Accept-Language'].slice(3, 8);

    this.setState({
      ip: ipJson.ip,
      language: language
    });
  }

  render() {
    const { time, ip, language } = this.state;

    return (
      <div className="composition">
        <div className="composition__section">
          <p className="composition__section--time">{time}</p>
          <p className="composition__section--description">Time</p>
          <p className="composition__section--details">
            Lorem ipsum lorem ipsum
          </p>
          <i className="fas fa-play composition__section--icon" />
        </div>
        <div className="composition__section">
          <p className="composition__section--ip">{ip}</p>
          <p className="composition__section--description">Your IP</p>
          <p className="composition__section--details">
            Lorem ipsum lorem ipsum
          </p>
          <i className="fas fa-comments composition__section--icon" />
        </div>
        <div className="composition__section">
          <p className="composition__section--language">{language}</p>
          <p className="composition__section--description">Language</p>
          <p className="composition__section--details">
            Lorem ipsum lorem ipsum
          </p>
          <i className="fas fa-sort-amount-down composition__section--icon" />
        </div>
      </div>
    );
  }
}

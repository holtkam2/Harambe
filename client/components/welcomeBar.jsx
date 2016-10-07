/* global navigator, $ */

import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Delay from 'react-delay';

class WelcomeBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: null,
      currentPosition: {
        lat: 53.5261,
        lng: 1.6255 },
      currentCity: 'Earth',
      currentWeather: null,
      currentCondition: '',
    };
  }

  componentWillMount() {
    this.getLocation();
    // this.conditions();
  }
// dynamic greeting functions
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: parseFloat(position.coords.latitude.toString().substring(0, 8)),
          lng: parseFloat(position.coords.longitude.toString().substring(0, 8)),
        };
        this.setState({ currentPosition: pos });
      });
    }

    setTimeout(() => {
      const geocodingAPI = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.currentPosition.lat},${this.state.currentPosition.lng}&key=AIzaSyAiUpvQQKjSDsz3HYjQp0CagTPNcQGboHk`;
      const weatherAPI = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.currentPosition.lat}&lon=${this.state.currentPosition.lng}&appid=74302259ae8bfa3d6e5e2e87672e62de`;
      $.getJSON(geocodingAPI, (json) => {
        if (json.status === 'OK') {
         // Doublecheck result 0
          const r = json.results[0];
         // look locality tag to get city name
          for (let i = 0, len = r.address_components.length; i < len; i += 1) {
            const ac = r.address_components[i];
            if (ac.types.indexOf('locality') >= 0) this.setState({ currentCity: ac.short_name });
          }
        }
      });
      $.getJSON(weatherAPI, (json) => {
        this.setState({ currentWeather: json });
        console.log('WEATHER', this.state.currentWeather);
        this.conditions();
      });
    }, 500);
  }

  greeting() {
    this.state.currentTime = new Date();
    console.log('TIME', this.state.currentTime);
    const currentHour = this.state.currentTime.getHours();
    let greetingPhrase = '';
    // Randomizer for a 'Hello'
    // const helloChance = Math.floor((Math.random() * 4));
    if (currentHour <= 11 && currentHour >= 4) {
      greetingPhrase = 'Good morning, ';
    } else if (currentHour >= 12 && currentHour < 18) {
      greetingPhrase = 'Good afternoon, ';
    } else if (currentHour >= 18) {
      greetingPhrase = 'Good evening, ';
    } else {
      greetingPhrase = 'Go back to bed, ';
    }
    // if (helloChance === 0) greetingPhrase = 'Hello, ';
    return greetingPhrase;
  }

  conditions() {
    this.state.unixTime = Date.parse(this.state.currentTime) / 1000;
    let condition = this.state.currentWeather.weather[0].description;
    let time;

    if (this.state.currentWeather.wind.speed < 0.3) {
      condition += ', calm';
    } else if (this.state.currentWeather.wind.speed < 1.5) {
      condition += ', light air';
    } else if (this.state.currentWeather.wind.speed < 3.3) {
      condition += ', light breeze';
    } else if (this.state.currentWeather.wind.speed < 5.5) {
      condition += ', gentle breeze';
    } else if (this.state.currentWeather.wind.speed < 7.9) {
      condition += ', moderate breeze';
    } else if (this.state.currentWeather.wind.speed < 10.7) {
      condition += ', fresh breeze';
    } else if (this.state.currentWeather.wind.speed < 13.8) {
      condition += ', strong breeze';
    } else if (this.state.currentWeather.wind.speed < 17.1) {
      condition += ', near gale';
    } else if (this.state.currentWeather.wind.speed < 20.7) {
      condition += ', gale';
    } else if (this.state.currentWeather.wind.speed < 24.4) {
      condition += ', severe gale';
    } else if (this.state.currentWeather.wind.speed < 28.4) {
      condition += ', whole gale';
    } else if (this.state.currentWeather.wind.speed < 32.6) {
      condition += ', violent storm';
    } else {
      condition += ', hurricane force';
    }

    if (this.state.unixTime < this.state.currentWeather.sys.sunrise) {
      time = new Date(this.state.currentWeather.sys.sunrise * 1000);
      // eslint-disable-next-line prefer-template
      time = `{time.getHours()}:${('0' + time.getMinutes()).slice(-2)}`;
      condition += `, sunrise at ${time}`;
    } else if (this.state.unixTime < this.state.currentWeather.sys.sunset) {
      time = new Date(this.state.currentWeather.sys.sunset * 1000);
      // eslint-disable-next-line prefer-template
      time = `{time.getHours()}:${('0' + time.getMinutes()).slice(-2)}`;
      condition += `, sunset at ${time}`;
    }

    condition += `, ${Math.floor(this.state.currentWeather.main.temp - 273.15)}°C`;
    this.setState({ currentCondition: condition });
  }

  render() {
    return (
      <div>
        {this.greeting()}{this.props.welcomeBarState.firstName}
        <Delay wait={1500}>
          <ReactCSSTransitionGroup
            transitionName="welcome"
            transitionAppear
            transitionAppearTimeout={6000}
            transitionEnterTimeout={6000}
            transitionLeaveTimeout={6000}
          >
            <div style={{ fontSize: '14px' }}>
              {this.state.currentCity} - {this.state.currentCondition}
            </div>
          </ReactCSSTransitionGroup>
        </Delay>
      </div>
    );
  }
}

WelcomeBar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  welcomeBarState: PropTypes.object,
  firstName: PropTypes.string,
};

export default WelcomeBar;

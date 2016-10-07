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
    };
  }

  componentWillMount() {
    this.getLocation();
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
      });
    }, 500);
  }

  greeting() {
    this.state.currentTime = new Date();
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

  render() {
    return (
      <div>
        {this.greeting()}{this.props.welcomeBarState.firstName}
        <Delay
          wait={1000}
        >
          <ReactCSSTransitionGroup
            transitionName="welcome"
            transitionAppear
            transitionAppearTimeout={5000}
            transitionEnterTimeout={5000}
            transitionLeaveTimeout={5000}
          >
            <div>
              I see you're coming from {this.state.currentCity} today
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

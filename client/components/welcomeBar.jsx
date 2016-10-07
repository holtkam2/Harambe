/* global navigator, $ */

import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Delay from 'react-delay';

class WelcomeBar extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: null, currentPosition: { lat: 53.5261, lng: 1.6255 } };
  }

// dynamic greeting functions
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentPosition = {
          lat: parseFloat(position.coords.latitude.toString().substring(0, 8)),
          lng: parseFloat(position.coords.longitude.toString().substring(0, 8)),
        };
      });
    }

    setTimeout(() => {
      const geocodingAPI = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.currentPosition.lat},${this.currentPosition.lng}&key=AIzaSyAiUpvQQKjSDsz3HYjQp0CagTPNcQGboHk`;
      $.getJSON(geocodingAPI, (json) => {
        if (json.status === 'OK') {
         // Check result 0
          const r = json.results[0];
         // look for locality tag
          for (let i = 0, len = r.address_components.length; i < len; i += 1) {
            const ac = r.address_components[i];
            if (ac.types.indexOf('locality') >= 0) this.city = ac.short_name;
          }
        }
        return this.city;
      });
    }, 1000);
  }

  greeting() {
    this.state.currentTime = new Date();
    const currentHour = this.state.currentTime.getHours();
    let greetingPhrase = '';
    const helloChance = Math.floor((Math.random() * 4));
    if (currentHour <= 11 && currentHour >= 4) {
      greetingPhrase = 'Good morning, ';
    } else if (currentHour >= 12 && currentHour < 18) {
      greetingPhrase = 'Good afternoon, ';
    } else if (currentHour >= 18) {
      greetingPhrase = 'Good evening, ';
    } else {
      greetingPhrase = 'Go back to bed, ';
    }
    if (helloChance === 0) greetingPhrase = 'Hello, ';
    return greetingPhrase;
  }

  render() {
    return (
      <div>
        {this.greeting()}{this.props.welcomeBarState.firstName}
        <Delay
          wait={4000}
        >
          <ReactCSSTransitionGroup
            transitionName="welcome"
            transitionAppear
            transitionAppearTimeout={4000}
            transitionEnterTimeout={4000}
            transitionLeaveTimeout={4000}
          >
            <div>
              I see you're coming from {this.getLocation()} today
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

import React, { Component, PropTypes } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class WelcomeBar extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: null };
  }

// dynamic greeting functions
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

import React, { Component, PropTypes } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class WelcomeBar extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: '' };
  }

// dynamic greeting functions
  greeting() {
    this.state.currentTime = new Date();
    const currentHour = this.state.currentTime.getHours();
    let greetingPhrase = '';
    if (currentHour < 11) {
      greetingPhrase = 'Good morning, ';
    } else if (currentHour >= 11 && this.state.currentHour < 19) {
      greetingPhrase = 'Hello, ';
    } else if (currentHour >= 19) {
      greetingPhrase = 'Good evening, ';
    }
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
  welcomeBarState: PropTypes.obj,
  firstName: PropTypes.string,
};

export default WelcomeBar;

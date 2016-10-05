import React, { Component } from 'react';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Toggle from 'material-ui/Toggle';

const styles = {
  toggle: {
    marginBottom: 7,
  },
};

// eslint-disable-next-line react/prefer-stateless-function
class ThemeButton extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="UISlider">
        <Toggle style={styles.toggle} />
      </div>
    );
  }
}

export default ThemeButton;

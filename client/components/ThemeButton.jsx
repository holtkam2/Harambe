import React, { Component, PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Toggle from 'material-ui/Toggle';

const styles = {
  toggle: {
    marginBottom: 7,
  },
};

class ThemeButton extends Component {

  render() {
    return (
      <div className="UISlider">
        <Toggle style={styles.toggle} />
      </div>
    );
  }
}

export default ThemeButton;

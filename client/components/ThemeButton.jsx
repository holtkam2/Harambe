import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

class ThemeButton extends Component {

  render() {
    return (
      <div className="themeButton">
        <RaisedButton>Change Theme</RaisedButton>
      </div>
    );
  }
}

export default ThemeButton;

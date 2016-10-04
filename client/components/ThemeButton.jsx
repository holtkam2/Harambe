import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

class ThemeButton extends Component {

  render() {
    return (
      <div className="UISlider">
        <FlatButton>
          <label className="switch">
            <input type="checkbox" />
            <div className="slider round"></div>
          </label>
        </FlatButton>
      </div>
    );
  }
}

export default ThemeButton;

import React, { Component } from 'react';

class SettingsButton extends Component {

   render() {
    const { toggleSettings } = this.props;
     return (
          <div className="settingsButton">
            <button onClick={toggleSettings}>Settings</button>
          </div>
          );
  }
}

export default SettingsButton;
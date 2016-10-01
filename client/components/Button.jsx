import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

// eslint-disable-next-line react/prefer-stateless-function
class SettingsButton extends Component {

  render() {
    const { toggleSettings } = this.props;
    return (
      <div className="settingsButton">
        <RaisedButton onClick={toggleSettings}>Settings</RaisedButton>
      </div>
    );
  }
}

SettingsButton.propTypes = { toggleSettings: PropTypes.func };
export default SettingsButton;

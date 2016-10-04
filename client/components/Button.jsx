import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import SettingsIcon from 'material-ui/svg-icons/action/settings';

class SettingsButton extends Component {

  render() {
    const { toggleSettings } = this.props;
    return (
      <div className="settingsButton">
        <FlatButton onClick={toggleSettings}>
          <SettingsIcon />
        </FlatButton>
      </div>
    );
  }
}

SettingsButton.propTypes = { toggleSettings: PropTypes.func };
export default SettingsButton;

// $.ajax({
//   url: '/api/state',
//   dataType: 'json',
//   method: 'GET',
//   cache: false,
//   success: function(data) {
//     console.log(data, 'from get state')
//     this.setState({rssFeed: data});
//   }.bind(this),
//   error: function(xhr, status, err) {
//     console.error(this.props.url, status, err.toString());
//   }.bind(this)
// });

import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import SettingsIcon from 'material-ui/svg-icons/action/settings';

// May become a class later on
// eslint-disable-next-line react/prefer-stateless-function
class SettingsButton extends Component {
  render() {
    const { toggleSettings } = this.props;
    return (
      <div className="settingsButton">
        <IconButton onClick={toggleSettings}>
          <SettingsIcon />
        </IconButton>
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

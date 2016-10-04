import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

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

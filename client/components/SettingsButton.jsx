/* eslint-env browser*/

import React, { Component, PropTypes } from 'react';

// (will need state eventually, maybe?)
// eslint-disable-next-line react/prefer-stateless-function
class SettingsButton extends Component {
  static propTypes = {
    toggleSubmit: PropTypes.func.isRequired,
    // value: PropTypes.boolean.isRequired
  }
  // constructor(props){
  //   super(props);
  // }

  render() {
    // console.log(value)
    // do props validation later
    // eslint-disable-next-line react/prop-types
    const { toggleSubmit, value } = this.props;
    console.log(value[0].displaySettings, 'this is value');

    if (value) {
      return (
        <div className="settingsButton">
          <button onClick={toggleSubmit}>Settings</button>
        </div>
        );
    }

    return (
      <div className="settingsButton">
        <button onClick={toggleSubmit}>Settings2</button>
      </div>
      );
  }
}

export default SettingsButton;

import React, { Component, PropTypes } from 'react';
import mapStateToProps from '../containers/settingsContainer.js'
// (will need state eventually)
// eslint-disable-next-line react/prefer-stateless-function
class Settings extends Component {
static propTypes = {
    value: PropTypes.number.isRequired
  }

  // constructor(props){
  //   super(props);
  // }

  render(){

    return (
      <div>Heheheheheheh</div>
    );

  }
}

export default Settings;

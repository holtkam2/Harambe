/* eslint-env browser*/

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import App from '../reducers/settingsButtonReducer.js';
import { connect } from 'react-redux';

class SettingsButton extends Component {
static propTypes = {
    toggleSubmit: PropTypes.func.isRequired,
    // value: PropTypes.boolean.isRequired
  }
  // constructor(props){
  //   super(props);
  // }

  render(){
    // console.log(value)
    const {toggleSubmit, value} = this.props;
    console.log(value[0].displaySettings, 'this is value');

            if(value){
    return (
      <div className="settingsButton">
        <button onClick={toggleSubmit}>Settings</button>
      </div>
      )
    } else {
      return (
      <div className="settingsButton">
        <button onClick={toggleSubmit}>Settings2</button>
      </div>
      )
    }

  }
}

export default SettingsButton;

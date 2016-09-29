import React, { Component } from 'react';
import { createStore } from 'redux'

class SettingDisp extends Component {

  render() {
    const { active } = this.props;
    console.log(active, "active");
    if(active) {
     return (
          <div>
            <h1>HEy</h1>
          </div>
          );
    }
    return ( <div></div> )
    }
  }

export default SettingDisp;
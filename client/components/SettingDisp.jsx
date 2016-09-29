import React, { Component } from 'react';

class SettingDisp extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { active } = this.props;
    console.log(this.props);
    console.log(active, "active");
    if(active) {
     return (
          <div>
            <h1>HEy</h1>
          </div>
          );
    }
    return ( <div>empty</div> )
    }
  }

export default SettingDisp;
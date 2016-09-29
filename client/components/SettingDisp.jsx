import React, { Component, PropTypes } from 'react';
// shoud this be a class?Not sure yet, only creating
// eslint-disable-next-line react/prefer-stateless-function
class SettingDisp extends Component {

  render() {
    const { active } = this.props;
    console.log(this.props);
    console.log(active, 'active');
    if (active) {
      return (
        <div>
          <h1>HEy</h1>
        </div>
      );
    }
    return (<div>empty</div>);
  }
}

SettingDisp.propTypes = {
  active: PropTypes.bool,
};

export default SettingDisp;

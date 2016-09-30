import React, { Component, PropTypes } from 'react';
// shoud this be a class?Not sure yet, only creating
// eslint-disable-next-line react/prefer-stateless-function
class SettingDisp extends Component {

  constructor(props) {
    super(props);
    this.state = { buttonName: 'HRR' };
  }

  handleChange(event) {
    this.setState({ buttonName: event.target.buttonName,
      URLName: event.target.URLName,
     });
  }

  render() {
    const { active } = this.props;
    console.log('settingsContainer: active is set to ', active);
    if (active) {
      return (
        <div className="settingsPanel">
          <h1>Settings</h1>
          <h5>Configure a new button</h5>
          Button Name:
          <input
            type="text"
            buttonName={this.state.buttonName}
            onChange={this.handleChange}
          />
          <button>Create button</button>
          Add a URL for this button to open:
          <input
            type="text"
            buttonName={this.state.URLName}
            onChange={this.handleChange}
          />
          <button>add URL to this button</button>
        </div>
      );
    }
    return (<div />);
  }
}

SettingDisp.propTypes = {
  active: PropTypes.bool,
};

export default SettingDisp;

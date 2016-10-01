import React, { Component, PropTypes } from 'react';

class SettingDisp extends Component {

  constructor(props) {
    super(props);
    this.state = { buttonName: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
  }

  onInputChange(event) {
    console.log('')
    this.setState({ buttonName: event.target.value });
  }

  onAddButtonClick() {
    this.props.addButtonClick(this.state.buttonName)
  }

  render() {
    const { addButtonClick, active, buttonName } = this.props;
    if (active) {
      return (
        <div className="settingsPanel">
          <h1>Settings</h1>
          <h5>Configure a new button</h5>
          Button Name:
          <input
            type="text"
            onChange={this.onInputChange}
            value={this.state.buttonName}
          />
          <button onClick={this.onAddButtonClick}>Create button</button>
          Add a URL for this button to open:
          <input
            type="text"
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
  addButtonClick: PropTypes.func,
  buttonName: PropTypes.string,
};

export default SettingDisp;

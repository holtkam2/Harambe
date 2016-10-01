import React, { Component, PropTypes } from 'react';

class SettingDisp extends Component {

  constructor(props) {
    super(props);
    this.state = { buttonName: '', URLName: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onURLInputChange = this.onURLInputChange.bind(this)
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.onAddURLClick = this.onAddURLClick.bind(this);
  }

  onInputChange(event) {
    this.setState({ buttonName: event.target.value });
  }

  onURLInputChange(event) {
    this.setState({ URLName: event.target.value})
  }

  onAddButtonClick() {
    this.props.addButtonClick(this.state.buttonName);
  }

  onAddURLClick() {
    this.props.addURLClick(this.state.buttonName, this.state.URLName);
  }

  render() {
    const { addButtonClick, addURLClick, active, buttonName, URLName } = this.props;
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
          onChange={this.onURLInputChange}
          value={this.state.URLName}
          />
          <button onClick={this.onAddURLClick}>add URL to this button</button>
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
  addURLClick: PropTypes.func,
};

export default SettingDisp;

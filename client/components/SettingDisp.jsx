import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class SettingDisp extends Component {

  constructor(props) {
    super(props);
    this.state = { buttonName: '', URLName: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onURLInputChange = this.onURLInputChange.bind(this);
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.onAddURLClick = this.onAddURLClick.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange(event) {
    this.setState({ buttonName: event.target.value });
  }

  onURLInputChange(event) {
    this.setState({ URLName: event.target.value });
  }

  onAddButtonClick() {
    this.props.addButtonClick(this.state.buttonName);
  }

  onAddURLClick() {
    this.props.addURLClick(this.state.buttonName, this.state.URLName);
  }

  onSaveButtonClick() {
    console.log(this.props);
    const stateObj = {
      // user: {
      //   username: ,
      //   firstname: ,
      //   lastname: ,
      // }
      buttons: {},
      interests: {},
    };
    // Please rename 'AddButtonClick' to 'buttons' or something
    _.each(this.props.state.addButtonClick.buttons, (value, key) => {
      stateObj.buttons[key] = value;
    });
    // Please add a 'feeds' object to state that then contains 'name': [urls] pairs for feeds.
    _.each(this.props.state.feeds, (value, key) => {
      stateObj.interests[key] = value;
    });

    $.post('/api/state', stateObj, (err, data) => {
      if (err) {

      } else {

      }
    });
  }

  render() {
    const { addButtonClick, addURLClick, active, buttonName, URLName, state } = this.props;
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
          <RaisedButton onClick={this.onAddButtonClick}>Create button</RaisedButton>

          Add a URL for this button to open:
          <input
            type="text"
            onChange={this.onURLInputChange}
            value={this.state.URLName}
          />
          <RaisedButton onClick={this.onAddURLClick}>add URL to this button</RaisedButton>

          <RaisedButton onClick={this.onSaveButtonClick}>Save</RaisedButton>
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

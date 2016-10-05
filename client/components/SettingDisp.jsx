/* global _, $ */

import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

class SettingDisp extends Component {

  constructor(props) {
    super(props);
    this.state = { buttonName: '', URLName: '', open: false };
    this.onInputChange = this.onInputChange.bind(this);
    this.onURLInputChange = this.onURLInputChange.bind(this);
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.onAddURLClick = this.onAddURLClick.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onInterestNameChange = this.onInterestNameChange.bind(this);
    this.onRSSFeedNameChange = this.onRSSFeedNameChange.bind(this);
    this.onInterestInputBoxClick = this.onInterestInputBoxClick.bind(this);
    this.onRSSFeedURLClick = this.onRSSFeedURLClick.bind(this);
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

  onInterestNameChange(event) {
    this.setState({ interestName: event.target.value });
  }

  onRSSFeedNameChange(event) {
    this.setState({ RSSFeedURL: event.target.value });
  }

  onInterestInputBoxClick() {
    this.props.interestNameClick(this.state.interestName);
  }

  onRSSFeedURLClick() {
    this.props.RSSFeedURLClick(this.state.RSSFeedURL, this.state.interestName);
  }

  onSaveButtonClick() {
    console.log('SAVEBUTTON', this.props.state);
    const stateObj = {
      user: {
         userName: this.props.state.currentUser.userName,
      },
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

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    const {
            addButtonClick, addURLClick, active, buttonName, URLName,
            state, interestName, RSSFeedURL, interestNameClick, RSSFeedURLClick, handleClose, handleOpen,
          } = this.props;

    const actions = [
      <FlatButton
        label="save"
        primary={true}
        onTouchTap={this.onSaveButtonClick}
      />,
      <FlatButton
        label="close"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    if (active) {
      return (
        <div className="listenBox" onMouseMove={this.handleOpen}>
          <Dialog
            title="settings"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            autoScrollBodyContent={true}
          >
            <div>
              <h5>configure a new button</h5>
              <TextField
                hintText="button name"
                onChange={this.onInputChange}
                value={this.state.buttonName}
              />
              <RaisedButton primary={true} onClick={this.onAddButtonClick}>create</RaisedButton>
            </div>
            <div>
              <TextField
                hintText="url"
                onChange={this.onURLInputChange}
                value={this.state.URLName}
              />
              <RaisedButton primary={true} onClick={this.onAddURLClick}>add</RaisedButton>
            </div>
            <div>
              <h5>configure a new feed</h5>
              <TextField
                hintText="feed name"
                onChange={this.onInterestNameChange}
                value={this.state.interestName}
              />
              <RaisedButton primary={true} onClick={this.onInterestInputBoxClick}>create</RaisedButton>
            </div>
            <div>
              <TextField
                hintText="rss url"
                onChange={this.onRSSFeedNameChange}
                value={this.state.RSSFeedURL}
              />
              <RaisedButton primary={true} onClick={this.onRSSFeedURLClick}>add</RaisedButton>
            </div>
          </Dialog>
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

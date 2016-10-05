/* global _, $ */

import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
// import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
// import IconButton from 'material-ui/IconButton';

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
    // Name makes sense as such
    // eslint-disable-next-line new-cap
    this.props.RSSFeedURLClick(this.state.RSSFeedURL, this.state.interestName);
  }

  onSaveButtonClick() {
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
    _.each(this.props.state.RSSFeedList, (value, key) => {
      stateObj.interests[key] = value;
    });

    // console.log('stateObj:', stateObj);

    $.post({
      url: '/api/state',
      data: JSON.stringify(stateObj),
      // success: success,
      contentType: 'application/json',
      dataType: 'json',
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
      // no-unused-vars max-len
      // eslint-disable-next-line
      addButtonClick, addURLClick, active, buttonName, URLName, state, interestName, RSSFeedURL, interestNameClick, RSSFeedURLClick, handleClose, handleOpen, toggleSettings,
    } = this.props;

    const actions = [
      <FlatButton
        label="save"
        primary
        onTouchTap={this.onSaveButtonClick}
      />,
      <FlatButton
        label="close"
        primary
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
            autoScrollBodyContent
          >
            <div>
              <h5>configure a new button</h5>
              <TextField
                hintText="button name"
                onChange={this.onInputChange}
                value={this.state.buttonName}
              />
              <RaisedButton primary onClick={this.onAddButtonClick}>create</RaisedButton>
            </div>
            <div>
              <TextField
                hintText="url"
                onChange={this.onURLInputChange}
                value={this.state.URLName}
              />
              <RaisedButton primary onClick={this.onAddURLClick}>add</RaisedButton>
            </div>
            <div>
              <h5>configure a new feed</h5>
              <TextField
                hintText="feed name"
                onChange={this.onInterestNameChange}
                value={this.state.interestName}
              />
              <RaisedButton primary onClick={this.onInterestInputBoxClick}>create</RaisedButton>
            </div>
            <div>
              <TextField
                hintText="rss url"
                onChange={this.onRSSFeedNameChange}
                value={this.state.RSSFeedURL}
              />
              <RaisedButton primary onClick={this.onRSSFeedURLClick}>add</RaisedButton>
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
  toggleSettings: PropTypes.func,
  interestNameClick: PropTypes.func,
  RSSFeedURLClick: PropTypes.func,
  state: PropTypes.obj,
  URLName: PropTypes.str,
  interestName: PropTypes.str,
  RSSFeedURL: PropTypes.str,
  handleClose: PropTypes.func,
  handleOpen: PropTypes.func,
};

export default SettingDisp;

/* global _, $ */

import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
// import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import SettingsIcon from 'material-ui/svg-icons/action/settings';

class SettingsDisp extends Component {
  constructor(props) {
    super(props);
    this.state = { buttonName: '', URLName: '', open: false };
    this.onInputChange = this.onInputChange.bind(this);
    this.onURLInputChange = this.onURLInputChange.bind(this);
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.onAddURLClick = this.onAddURLClick.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onButtonToDeleteChange = this.onButtonToDeleteChange.bind(this);
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
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
    this.state.URLName = '';
  }

  onButtonToDeleteChange(event) {
    this.setState({ buttonToDelete: event.target.value });
  }

  onDeleteButtonClick() {
    this.props.deleteButtonClick(this.state.buttonToDelete);
    this.state.buttonToDelete = '';
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
    // console.log(stateObj);

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
      addButtonClick, addURLClick, active, buttonName, URLName, state, handleClose, handleOpen, toggleSettings, buttonToDelete, deleteButtonClick,
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

    return (
      <div>
        <div className="settingsButton">
          <IconButton onClick={this.handleOpen}>
            <SettingsIcon />
          </IconButton>
        </div>
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
            <h5>delete a button</h5>
            <TextField
              hintText="button name"
              onChange={this.onButtonToDeleteChange}
              value={this.state.buttonToDelete}
            />
            <RaisedButton primary onClick={this.onDeleteButtonClick}>delete</RaisedButton>
          </div>
          <div>
            <h5>select up to two RSS feeds</h5>
            <RaisedButton onClick = {() => { this.props.selectRSSfeed("news") }}>news</RaisedButton>
            <RaisedButton onClick = {() => { this.props.selectRSSfeed("US stocks") }}>US stocks</RaisedButton>
            <RaisedButton onClick = {() => { this.props.selectRSSfeed("tech news") }}>tech news</RaisedButton>
            <RaisedButton onClick = {() => { this.props.selectRSSfeed("finance news") }}>finance news</RaisedButton>
            <RaisedButton onClick = {() => { this.props.selectRSSfeed("sports") }}>sports</RaisedButton>
          </div>
          <div>
            <h5>confirm RSS feed selections</h5>
            <RaisedButton>submit</RaisedButton>
          </div>

        </Dialog>
      </div>
    );
  }
}

SettingsDisp.propTypes = {
  active: PropTypes.bool,
  addButtonClick: PropTypes.func,
  buttonName: PropTypes.string,
  addURLClick: PropTypes.func,
  toggleSettings: PropTypes.func,

  // eslint-disable-next-line react/forbid-prop-types
  state: PropTypes.object,
  URLName: PropTypes.string,
  handleClose: PropTypes.func,
  handleOpen: PropTypes.func,
  deleteButtonClick: PropTypes.func,
};

export default SettingsDisp;

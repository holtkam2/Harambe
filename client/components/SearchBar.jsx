/* eslint-env browser*/
/* global $ */

import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '', userName: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/api/state',
      dataType: 'json',
      method: 'GET',
      cache: false,
      success: (data) => {
        this.props.sendState(data);
        this.setState({ userName: data.user.firstName });
      },
    });
  }

  onInputChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    window.open(`https://www.google.com/#q=${this.state.searchTerm}`, '_blank');
    this.setState({ searchTerm: '' });
  }

  render() {
    // gets used in container
    // eslint-disable-next-line no-unused-vars
    const { sendState } = this.props;

    return (
      <div className="searchBar">
        <ReactCSSTransitionGroup
          transitionName="welcome"
          transitionAppear
          transitionAppearTimeout={2500}
        >
          <div>Hello, {this.state.userName}</div>
        </ReactCSSTransitionGroup>
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <TextField
            hintText="what do you want to know?"
            floatingLabelText="search the google"
            fullWidth
            onChange={this.onInputChange}
            value={this.state.searchTerm}
          />
          <div className="input-group-btn">
            <FlatButton label="submit" primary type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  sendState: PropTypes.func,
};

export default SearchBar;

/* eslint-env browser*/
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '', userName: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    window.open(`https://www.google.com/#q=${this.state.searchTerm}`, '_blank');
    this.setState({ searchTerm: '' });
  }

  componentDidMount() {
    $.ajax({
      url: '/api/state',
      dataType: 'json',
      method: 'GET',
      cache: false,
      success: function (data) {
        this.setState({ userName: data.user.firstName });
      }.bind(this),
    });
  }

  render() {
    return (
      <div className="searchBar">
        <div>Hello, {this.state.userName}</div>
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <TextField
            hintText="what do you want to know?"
            floatingLabelText="search the google"
            fullWidth={true}
            onChange={this.onInputChange}
            value={this.state.searchTerm}
          />
          <div className="input-group-btn">
            <FlatButton label="submit" primary={true} type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

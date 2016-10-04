/* eslint-env browser*/
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '', userName: 'Roni' };
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
        this.setState({ userName: data.firstName });
      }.bind(this),
    });
  }

  render() {
    return (
      <div className="searchBar">
        <div>Hello, {this.state.userName}</div>
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input
            className="form-control"
            placeholder="Search Google!"
            onChange={this.onInputChange}
            value={this.state.searchTerm}
          />
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="submit">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

export default SearchBar;

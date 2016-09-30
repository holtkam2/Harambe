/* eslint-env browser*/
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };

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

  render() {
    return (
      <div className="searchBar">
        <div>Hello, User</div>
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

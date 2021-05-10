import React, { Component } from 'react';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {query: ''};
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    this.setState({query: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault(); // Stay on this page -- don't submit the form.
    this.props.onSubmit(this.state.query); // fetchImages (featuring Axios)
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input type="search" placeholder="clouds" required onInput={ this._handleInput } />
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default SearchForm;

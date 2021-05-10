import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Gallery from './Gallery';

class FlickrSearch extends Component {
  render() {
    return (
      <div>
        <SearchForm />
        <Gallery />
      </div>
    )
  }
}

export default FlickrSearch;

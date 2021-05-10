import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    return (
      <div>
        { this.props.images.map( (url) => <img key={url} src={url} alt="Copyright Flickr" /> ) }
      </div>
    )
  }
}

export default Gallery;

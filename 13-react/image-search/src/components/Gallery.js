import React from 'react';

// Functional components: good when you don't need state.
// Think of it as just the render method.
// No `this`.

const Gallery = (props) => {
  return (
    <div>
      { props.images.map( (url) => <img key={url} src={url} alt="Copyright Flickr" /> ) }
    </div>
  )
};

export default Gallery;

import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const { name, age, motto, pic } = this.props; // Destructuring.

    return (
      <div>
        <h2>{ name }</h2>
        <h3>Age: { age }</h3>
        <p>{ motto }</p>
        <img src={ pic } alt={ name } />
      </div>
    );
  }
}

export default Profile;

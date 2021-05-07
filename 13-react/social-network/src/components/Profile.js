import React, { Component } from 'react';

class Profile extends Component {
  constructor() { // setup
    super();

    this.state = {
      height: 100 // initial value
    };

    this._zoomIn = this._zoomIn.bind(this); // This makes it work.
    this._zoomOut = this._zoomOut.bind(this); // This makes it work.
  }

  _zoomIn() {
    this.setState({height: this.state.height + 10});
  }

  _zoomOut() {
    // height cannot go below zero:
    if (this.state.height - 10 > 0) {
      this.setState({height: this.state.height - 10});
    }
  }

  render() {
    const { name, age, motto, pic } = this.props; // Destructuring.

    return (
      <div>
        <h2>{ name }</h2>
        <h3>Age: { age }</h3>
        <p>{ motto }</p>
        <div>
          <button onClick={ this._zoomIn }> + </button>
          <button onClick={ this._zoomOut }> - </button>
        </div>
        <img src={ pic } alt={ name } height={ this.state.height } />
      </div>
    );
  }
}

export default Profile;

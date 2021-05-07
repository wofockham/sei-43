import React, { Component } from 'react'; // Destructuring

// React is obsessed with state.

class Clickr extends Component {
  constructor() { // A method called automatically in which we set things up.
    super(); // You have to call super().
    this.state = {
      clicks: 0 // Put information that will change inside state so React can monitor it.
    };
    this._incrementCount = this._incrementCount.bind(this); // WTF??? // You need this, just trust me.
  }

  // Event handlers start with an _ (by convention).
  _incrementCount() {
    this.setState({clicks: this.state.clicks + 1}); // No mutation.
  }

  // Render gets called automatically whenever the state changes (via setState).
  render() {
    return (
      <button onClick={ this._incrementCount }>
        click count: { this.state.clicks }
      </button>
    );
  }
}

export default Clickr;

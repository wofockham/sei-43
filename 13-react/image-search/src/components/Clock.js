import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: (new Date()).toString()
    };

    // ES6: arrow functions won't lose sight of `this`
    setInterval(() => {
      this.setState({time: (new Date()).toString()}); // this is still the clock
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>{ this.state.time }</h1>
      </div>
    )
  }
}

export default Clock;

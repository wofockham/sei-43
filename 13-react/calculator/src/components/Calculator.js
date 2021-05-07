import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      a: 0,
      b: 0
    };
    this._updateA = this._updateA.bind(this);
    this._updateB = this._updateB.bind(this); // Makes it work.
  }

  _updateA(event) {
    this.setState({a: Number(event.target.value)});
  }

  _updateB(event) {
    this.setState({b: Number(event.target.value)});
  }

  render() {
    const {a, b} = this.state; // destructuring
    return (
      <div>
        <h1>Advanced Crappy Calculator</h1>
        <input type="number" onChange={ this._updateA } value={ this.state.a || '' } />
        <input type="number" onChange={ this._updateB } value={ this.state.b || '' } />
        <h2>Results</h2>
        <p>{ a } + { b } = { a + b }</p>
        <p>{ a } - { b } = { a - b }</p>
        <p>{ a } * { b } = { a * b }</p>
        <p>{ a } / { b } = { a / b }</p>
        <p>{ a } ** { b } = { a ** b }</p>
      </div>
    )
  }
}

export default Calculator;

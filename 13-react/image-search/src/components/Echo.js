import React, { Component } from 'react';

class Echo extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Type your message in the input below'
    };
    this._updateMessage = this._updateMessage.bind(this);
    this._clearMessage = this._clearMessage.bind(this);
  }

  _updateMessage(event) {
    this.setState({message: event.target.value});
  }

  _clearMessage(event) {
    this.setState({message: ''});
  }

  render() {
    return (
      <div>
        <p>{ this.state.message || 'some default' }</p>

        <input onChange={ this._updateMessage } value={ this.state.message } />

        <button onClick={ this._clearMessage }>
          Clear message
        </button>

        <p>This component is sponsored by { this.props.sponsor }</p>
      </div>
    );
  }
}

export default Echo;

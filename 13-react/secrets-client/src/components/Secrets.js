import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/secrets.json';

class Secrets extends Component {
  constructor() {
    super();
    // TODO: fetch these via AJAX
    this.state = {
      secrets: []
    };

    // TODO: continuously fetch new secrets
    axios.get(SERVER_URL).then((results) => {
      this.setState({ secrets: results.data });
    });

    this.saveSecret = this.saveSecret.bind(this);
  }

  saveSecret(content) {
    // TODO: save new secrets via AJAX
    const secret = {
      id: Math.random(), // TODO: get an actual ID from the database
      content: content
    };

    // Add a new secret to the collection of secrets without mutation.
    this.setState({ secrets: [...this.state.secrets, secret]});
  }

  render() {
    return (
      <div>
        <h1>Tell me all your secrets</h1>
        <SecretForm onSubmit={ this.saveSecret } />
        <SecretsList secrets={ this.state.secrets } />
      </div>
    );
  }
}

class SecretForm extends Component {
  constructor() {
    super();
    this.state = { content: '' };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState({ content: event.target.value });
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.content);
    this.setState({content: ''}); // Reset the form
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange } value={ this.state.content } />
        <input type="submit" value="Tell" />
      </form>
    );
  }
}

const SecretsList = (props) => {
  return (
    <div>
      { props.secrets.map((s) => <p key={ s.id }>{ s.content }</p>) }
    </div>
  );
}

export default Secrets;

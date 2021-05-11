import React, { Component } from 'react';
import axios from 'axios';

// const SERVER_URL = 'http://localhost:3000/secrets.json';
const SERVER_URL = 'http://d598fe4eaead.ngrok.io/secrets.json';

class Secrets extends Component {
  constructor() {
    super();
    this.state = {
      secrets: []
    };

    this.saveSecret = this.saveSecret.bind(this);
  }

  componentDidMount() {
    // Polling:
    const fetchSecrets = () => {
      axios.get(SERVER_URL).then((results) => {
        this.setState({ secrets: results.data });
        setTimeout(fetchSecrets, 4000); // recursion: setInterval is a luxury
      });
    };
    fetchSecrets();
  }

  saveSecret(content) {
    axios.post(SERVER_URL, { content: content }).then((response) => {
      // Add a new secret to the collection of secrets without mutation.
      this.setState({ secrets: [...this.state.secrets, response.data]});
    })
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

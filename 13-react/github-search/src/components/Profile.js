import React, { Component } from 'react';
import Github from '../github';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      info: null,
      repos: null
    }
  }

  componentDidMount() {
    const { username } = this.props.match.params;

    Github.getUserInfo(username).then((response) => this.setState({info: response.data}));
    Github.getUserRepos(username).then((response) => this.setState({repos: response.data}));

    // const info = await Github.getUserInfo(username);
    // const repos = await Github.getUserRepos(username);

    // this.setState({
    //   info: info.data,
    //   repos: repos.data
    // });
  }

  render() {
    return (
      <div>
        <h2>Profile for {this.props.match.params.username}</h2>
        <div style={{display: "flex"}}>
          <UserInfo info={ this.state.info } />
          <Repositories repos={ this.state.repos } />
        </div>
      </div>
    );
  }
};

const UserInfo = (props) => {

  // conditional rendering:
  if (props.info === null) {
    return (<div>Loading...</div>);
  }

  const { login, avatar_url, bio, followers, following, public_repos, public_gists } = props.info;

  return (
    <div>
      <h3>Stats for { login }</h3>
      <img src={ avatar_url } alt={ login } width="200" />
      <p>Bio: { bio }</p>
      <p>Followers: { followers }</p>
      <p>Following: { following }</p>
      <p>Public repos: { public_repos }</p>
      <p>Public gists: { public_gists }</p>
    </div>
  );
};

const Repositories = (props) => {
  if (props.repos === null) {
    return (<div>Loading...</div>);
  }

  const userRepos = props.repos.map((r) => (
    <li key={ r.id }>
      <a href={ r.html_url } target="_blank">
        { r.name }
      </a>
    </li>
  ));

  return (
    <div>
      <h3>User Repos</h3>
      <ul>
        { userRepos }
      </ul>
    </div>
  )
}

export default Profile;

import React from 'react';
import _ from 'underscore';

import { Link } from 'react-router-dom';

const Home = (props) => {
  const _gotoRandomUser = () => {
    const students = ['audreypatricia', 'BhavyaGovind', 'christopherdavidjohnson', 'dajohns1562', 'faithsylvia1', 'KatieZoe', 'Kimberleyfaith', 'mauritzerick', 'PaulCalnan', 'Priyanka-1412', 'SamGelwyn', 'Selm123', 'smartnelly', 'coldhead'];
    const randomStudent = _(students).sample();
    props.history.push(`/details/${ randomStudent }`); // redirect (programmatic navigation)
  };

  return (
    <div>
      <h1>Github Search</h1>

      <Link to="/search">
        <button>Search for a user</button>
      </Link>

      <button onClick={ _gotoRandomUser }>Random user</button>

    </div>
  );
}

export default Home;

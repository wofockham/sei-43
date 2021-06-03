import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NumberFact = () => {
  const [fact, setFact] = useState('');

  // Only run once
  useEffect(() => {
    axios.get('http://numberapi.com/random/trivia').then((response) => {
      setFact(response.data);
    });
  }, []); // "empty array" means "only run once"

  return (
    <div>
      { fact }
    </div>
  )
};

export default NumberFact;

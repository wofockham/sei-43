import React, { useState } from 'react';

const Echo = () => {
  const [message, setMessage] = useState('hello faith'); // Initial state
  return (
    <div>
      <h2>{ message }</h2>
      <input onInput={ (event) => setMessage( event.target.value ) } value={ message } />
    </div>
  );
}

export default Echo;

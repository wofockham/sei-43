import React, { useState } from 'react';

// Functional component:
const Clickr = () => {
  const [clicks, setClicks] = useState(0); // Array destructuring

  return (
    <button onClick={ () => setClicks(clicks + 1) }>{ clicks } clicks so far</button>
  );
};

// class Clickr extends Component {
//   constructor() {
//     super();
//     this.state = {
//       clicks: 0
//     };
//     this._incrementClicks = this._incrementClicks.bind(this);
//   }
//
//   _incrementClicks() {
//     this.setState({clicks: this.state.clicks + 1});
//   }
//
//   render() {
//     return (
//       <button onClick={ this._incrementClicks }>
//         { this.state.clicks } clicks so far
//       </button>
//     );
//   }
// }

export default Clickr;

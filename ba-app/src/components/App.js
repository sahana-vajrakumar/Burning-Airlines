import React, { Component } from 'react';

import './App.css';
import Home from './Home'
// import Flights from './Flights'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        {/* <Flights /> */}

      </div>
    );
  }
}

export default App;

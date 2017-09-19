import React, { Component } from 'react';
import Starbar from './components/Starbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <h2>Starbar</h2>
        <Starbar />
        <h2>Dropdown</h2>
      </div>
    );
  }
}

export default App;

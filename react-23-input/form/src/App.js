import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // Always create the state object in the constructor
  constructor(props) {
    super(props);

    this.state = { // 'state' has meaning in react
      name: '',
      age: 0,
    };
  }

  display() {
    this.setState({ name: 'Luke' });
  }

  updateName(event) {
    // Print the value of the changed textbox.
    console.log(event.target.value);
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Name" 
          onChange={(event) => this.updateName(event)} 
          value={this.state.name} />

        <input type="number" placeholder="Age" />

        <p>Registered name: {this.state.name}</p>
        <p>Registered age: {this.state.age}</p>
        <h2>WELCOME HOME {this.state.name}</h2>
      </div>
    );
  }
}

export default App;

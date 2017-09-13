import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FancyButton from './fancybutton';

class App extends Component {
  constructor(props) {
    super(props); // don't forget this (you will)

    // Set up the initial state for this component.
    this.state = {
      adjective: '',
      possible: ['quickly', 'dynamically', 'sloppily', 'eagerly'],
    };
  }

  updateAdjective(adj) {
    // Built-in react function called 'setState' that updates the components state
    this.setState({
      adjective: adj,
    });

    // this.state.adjective = adj;  <--- don't do this
  }

  render() {
    const buttons = this.state.possible.map(adjective => {
      return (
        <FancyButton 
          key={adjective} 
          word={adjective} 
          whenClicked={() => this.updateAdjective(adjective)}>
        </FancyButton>
      );
    })
    /**
     * JSX: HTML in Javascript
     * 
     * A way to write Javascript in HTML. Special format that's very
     * similar to HTML but with some extra super powers.
     */
    return (
      <div className="App">
        <p className="App-intro">
          To get {this.state.adjective} started, edit <code>src/App.js</code> and save to reload.
        </p>
        {buttons}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { goUpAction, goDownAction, reducer } from './store';

// Black magic, come forth
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p>{this.props.counter}</p>
        <button onClick={() => this.props.up()}>Increase</button>
        <button onClick={() => this.props.down()}>Decrease</button>
      </div>
    );
  }
}

// Two things that need to be connected:
//    1. How to read from the state (get info out)
//    2. How to send actions to the state (put info in)
function mapStateToProps(state) {
  return {
    counter: state.counter,
  }
}

// 'dispatch' is a built-in redux function that sends the 
// specified action to the reducer function
function mapActionsToProps(dispatch) {
  return {
    up: function () {
      dispatch(goUpAction);
    },
    down: function () {
      dispatch(goDownAction);
    },
  };
}

export default connect(mapStateToProps, mapActionsToProps)(App);

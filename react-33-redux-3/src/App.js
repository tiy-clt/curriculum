import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { addFriends } from './actions';

class App extends Component {
  render() {
    // come back to this soon
    const friendlies = this.props.friends.map(friend => {
      return <li key={friend.login.username}>{friend.name.first} {friend.name.last}</li>;
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={() => this.props.findFriends()}>Find new friends</button>
        <ul>
          {friendlies}
        </ul>
      </div>
    );
  }
}

// When we click the button, we want to do things in this order:
//  1. Make the GET request
//  2. Receive response, send action

function mapStateToProps(state) {
  return {
    friends: state.friends,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // get friends. this is where the good stuff happens (api req, etc)
    findFriends: function () {
      fetch('https://randomuser.me/api/?results=50')
        .then(resp => resp.json())
        .then(response => {
          // let's discuss
          const action = addFriends(response.results);
          dispatch(action);

          // dispatch(addFriends(response.results));
        });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

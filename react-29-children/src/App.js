import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Dropdown from './components/Dropdown';
import DropdownItem from './components/DropdownItem';
import Project from './components/Project';

import { Switch, Route, Link, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {/* Navigation */}
        <nav>
          <ul>
            {/* IRL you would use a variable for the ID, not hard-code it directly */}
            <li><Link to={ '/projects/' + '0' }>Calculator</Link></li>
            <li><Link to={ '/projects/' + '1' }>Snippets</Link></li>
            <li><Link to={ '/projects/' + '2' }>Gabble</Link></li>
          </ul>
        </nav>

        {/* Child components! */}
        <Dropdown name="File">
          <DropdownItem name="New" />
          <DropdownItem name="Save" />
          <DropdownItem name="Save as" />
          <DropdownItem name="Exit" />
        </Dropdown>

        <Dropdown name="Edit">
          <DropdownItem name="Cut" />
          <DropdownItem name="Copy" />
          <DropdownItem name="Paste" />
        </Dropdown>

        <Dropdown name="Projects">
          <DropdownItem name="Calculator" />
          <DropdownItem name="Snippets" />
          <DropdownItem name="Gabble" />
        </Dropdown>

        <main>
          <Switch>
            <Route path="/projects/:id" component={Project} />
            {/* 
              <Route path="/projects/0" component={ProjectZero} />
              <Route path="/projects/1" component={ProjectOne} />
              <Route path="/projects/2" component={ProjectTwo} /> 
            */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);

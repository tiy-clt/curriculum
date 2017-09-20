import React, { Component } from 'react';
import {Route, Switch, Link, withRouter } from 'react-router-dom';

import Home from './components/views/Home';
import PageOne from './components/views/Page1';
import PageTwo from './components/views/Page2';

import './App.css';

class App extends Component {
  goToP2() {
    this.props.history.push(`/page_two`);    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/page_one">Page one</Link></li>
            <li><Link to="/page_two">Page two</Link></li>
          </ul>
        </nav>
        <main>
          <button onClick={() => this.goToP2()}>Go to page two</button>
          {
            /* 
            BrowserRouter means we're configuring routes.
            Switch means only one of these three should ever show up. 
            */
          }
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/page_one" component={PageOne} />
              <Route path="/page_two" component={PageTwo} />
            </Switch>
        </main>
        <footer>Copyright this year</footer>
      </div>
    );
  }
}

/* 
withRouter() is a function included in react-router-dom that AFAIK passes the
'history' prop into the component. If you don't use the withRouter function then
this.props.history will be undefined.
*/
export default withRouter(App);

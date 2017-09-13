import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Find the element on the page with #root and create the 'App' component
// inside of it.
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

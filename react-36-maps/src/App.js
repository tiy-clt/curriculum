import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { addPlace } from './actions';

/**
 * 1. Create a text box for people to type in places.
 * 2. Use Google geocoding API to get a latlong for that place.
 * 3. Add place to redux.
 * 4. Try to display place on map (this might be hard).
 */

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      map: null,
    };
  }

  handleText(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit() {
    const url = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCfAl1doEqzhrXLUsog78OiWvR9w4Pw09c&address=" + this.state.text;
    fetch(url)
      .then(resp => resp.json())
      .then(resp => {
        // Thinking through the object we'll actually want to store.
        this.props.newPlace({
          name: this.state.text,
          lat: resp.results[0].geometry.location.lat,
          long: resp.results[0].geometry.location.lng,
        });
      });
  }

  initMap() {
    /* 'google not defined' because it was looking for a variable called 'google' in this
        file, which doesn't exist. window.google means look at the global variables for the whole
        page for one called 'google', which does exist once the script loads. */
    const map = new window.google.maps.Map(document.querySelector('#map'), {
      zoom: 6,
      center: {lat: 35.194, lng: -80.849}
    });

    this.setState({ map: map });
  }

  /* Wait until the component mounts, otherwise #map won't exist in the DOM yet */
  componentDidMount() {
    this.initMap();
  }

  render() {
    const places = this.props.places;

    // Loop over all of the places in the store, adding a marker for each.
    for (let i = 0; i < places.length; i++) {
      new window.google.maps.Marker({
        position: {               // coordinates from geocoding
          lat: places[i].lat,
          lng: places[i].long,
        },
        map: this.state.map,      // map object we created in initMap
      });
    }

    return (
      <div className="App">
        <header className="App-header">
          <input type="text" value={this.state.text} onChange={ev => this.handleText(ev)} placeholder="I've been..." />
          <button onClick={() => this.handleSubmit()}>Save</button>
        </header>
        {/* Display our map */}
        <div id="map"></div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    places: state.places, // so we can render all of the markers
  };
}

function dispatchToProps(dispatch) {
  return {
    newPlace: function (place) {
      dispatch(addPlace(place));  // import addPlace @ the top
    }
  };
}

export default connect(stateToProps, dispatchToProps)(App); // import connect from react-redux

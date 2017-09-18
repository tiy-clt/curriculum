import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBox from './components/SearchBox';
import MovieList from './components/MovieList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [],
    };
  }

  handleMovieSearch(term) {
    console.log('making api request, search for ' + term);
    fetch('https://api.themoviedb.org/3/search/movie?api_key=0603313ca18aa157f0e6df581a8fbadf&query=' + term)
      .then(response => response.json())
      .then(response => {
        this.setState({
          movieList: response.results,
        });
      });
  }

  // What happens in SearchBox needs to modify
  // this.state.movieList.
  // 
  // What you should not do: have SearchBox modify
  // another component's state.
  // What you should do: have SearchBox indicate
  // that the state needs to change.
  render() {
    return (
      <div className="App">
        <SearchBox onSearchClick={text => this.handleMovieSearch(text)} />
        <MovieList movies={this.state.movieList}></MovieList>
      </div>
    );
  }
}

export default App;

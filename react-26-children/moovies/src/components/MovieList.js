import React, { Component } from 'react';

import Movie from './Movie'; // we're already in components/

class MovieList extends Component {
    render() {
        const movies = this.props.movies;
        // Show all the movies
        let movieElements = [];
        for (let i = 0; i < movies.length; i++) {
            movieElements.push(
                <Movie info={movies[i]} key={movies[i].id} />
            );
        }

        // movies.map(movie => <Movie info={movie} />);

        return (
            <ul>
                {movieElements}
            </ul>
        )
    }
}

export default MovieList;

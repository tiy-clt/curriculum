import React, { Component } from 'react';

class Movie extends Component {
    render() {
        return (
            <li key={this.props.info.id}>
                <h3>{this.props.info.title}</h3>
                <p>{this.props.info.overview}</p>
            </li>
        );
    }
}

export default Movie;
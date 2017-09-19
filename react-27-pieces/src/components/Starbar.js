import React, { Component } from 'react';
import Star from './Star';

class Starbar extends Component {
    constructor(props) {
        super(props);

        /**
         * Keep track of the current rating. Hovering over stars changes the rating.
         */
        this.state = {
            stars: 0,
        };
    }

    /**
     * Change the current rating to `num`.
     */
    starCount(num) {
        this.setState({ stars: num });
    }

    render() {
        const stars = this.state.stars; // alias for simpler code below

        return (
            <div className="starbar">
                <span className="label">{stars}</span>
                <Star fill={stars > 0} onHover={() => this.starCount(1)} />
                <Star fill={stars > 1} onHover={() => this.starCount(2)} />
                <Star fill={stars > 2} onHover={() => this.starCount(3)} />
                <Star fill={stars > 3} onHover={() => this.starCount(4)} />
                <Star fill={stars > 4} onHover={() => this.starCount(5)} />
            </div>
        );
    }
}

export default Starbar;
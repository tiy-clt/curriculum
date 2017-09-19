import React, { Component } from 'react';

/**
 * Props:
 *  - fill: true or false, indicating whether the star should be filled or not
 *  - onHover: the function to call when someone hovers over a star
 */
class Star extends Component {
    render() {
        
        if (this.props.fill) { // Return the filled in star
            return (
                <span className="star" onMouseOver={() => this.props.onHover()}>
                    &#9733;
                </span>
            );
        } else { // Return the empty star
            return (
                <span className="star" onMouseOver={() => this.props.onHover()}>
                    &#9734;
                </span>
            );
        }
    }
}

export default Star;
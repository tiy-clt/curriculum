import React, { Component } from 'react';

class FancyButton extends Component {
    render() {

        return (
            <button onClick={() => this.props.whenClicked()}>{this.props.word}</button>
        )
    }
}

export default FancyButton;
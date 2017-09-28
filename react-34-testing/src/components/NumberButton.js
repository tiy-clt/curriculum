import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addDigit } from '../actions';

class NumberButton extends Component {
    render() {
        return (
            <button onClick={() => this.props.press(this.props.value)}>
                {this.props.value}
            </button>
        );
    }
}

function dispatchToProps(dispatch) {
    return {
        press: function(num) {
            dispatch(addDigit(num));
        }
    };
}

export default connect(null, dispatchToProps)(NumberButton);

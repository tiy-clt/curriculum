import React, { Component } from 'react';

import { connect } from 'react-redux';
import { clear, equals, addOperator } from '../actions';

class OperatorButton extends Component {
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
        press: function (op) {
            if (op === 'C') {
                dispatch(clear());
            } else if (op === '=') {
                dispatch(equals());
            } else {
                dispatch(addOperator(op));
            }
        }
    }
}

export default connect(null, dispatchToProps)(OperatorButton);
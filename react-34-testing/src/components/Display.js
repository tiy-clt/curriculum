import React, { Component } from 'react';

import { connect } from 'react-redux';

class Display extends Component {
    render() {
        return (
           <div className="display">
               {this.props.num1 ? this.props.num1 : ''} 
               {this.props.operation}
               {this.props.num2 ? this.props.num2 : ''}
            </div>
        );
    }
}

function stateToProps(state) {
    return {
        num1: state.num1,
        num2: state.num2,
        operation: state.operation,
    };
}

export default connect(stateToProps, null)(Display);
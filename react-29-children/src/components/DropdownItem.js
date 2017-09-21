import React, { Component } from 'react';

class DropdownItem extends Component {
    handleClick(event) {
        console.log(this.props.name);
    }

    render() {
        return (
            <li onClick={event => this.handleClick(event)}>{this.props.name}</li>
        );
    }
}

export default DropdownItem;
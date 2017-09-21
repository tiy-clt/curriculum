import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showing: false,
        };
    }

    toggle() {
        this.setState({ showing: !this.state.showing });

        // if (this.state.showing) {
        //     this.setState({ showing: false });
        // } else {
        //     this.setState({ showing: true });
        // }
    }

    render() {
        let kids = this.state.showing ? this.props.children : undefined;

        // let kids;

        // if (this.state.showing) {
        //     kids = this.props.children;
        // }

        return (
            <div>
                <p onClick={() => this.toggle()}>{this.props.name}</p>
                <ul>
                    {kids}
                </ul>
            </div>
        );
    }
}

export default Dropdown;
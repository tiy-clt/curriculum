import React, { Component } from 'react';

class SearchBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    handleTyping(ev) {
        // ev = event
        // target = the item that the event occurred on
        // value = the value of the textbox (just like in vanilla js)
        this.setState({ 
            text: ev.target.value 
        });
    }

    handleSearch(ev) {
        // console.log('searching for ' + this.state.text);
        this.props.onSearchClick(this.state.text);
    }

    render() {
        return (
            <div>
                <input type="text" 
                    placeholder="Search" 
                    value={this.state.text} 
                    onChange={event => this.handleTyping(event)} />
                <button onClick={event => this.handleSearch(event)}>Go</button>
            </div>
        )
    }
}

export default SearchBox;
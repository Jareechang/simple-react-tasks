import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(e) {
        this.setState({
            inputText: e.target.value
        })
        this.props.store.searchText(e.target.value);
    }

    render() {
        const getClassName = () => {
            return `${this.props.className || ''}`;
        }
        return (
            <div className={getClassName()}>
                <input 
                    type="text"
                    value={this.state.inputText}
                    onChange={this.handleTextChange}
                />
            </div>
        )
    }
}

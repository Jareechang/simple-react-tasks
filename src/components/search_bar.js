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
            return `inner-addon right-addon ${this.props.className || ''}`;
        }
        return (
            <div className="searchbar-section">
                <p> </p>
                <div className={getClassName()}>
                    <i className="glyphicon glyphicon-search"></i>
                    <input 
                        className="custom-form-group"
                        type="text"
                        placeholder="SEARCH"
                        value={this.state.inputText}
                        onChange={this.handleTextChange}
                    />
                </div>
            </div>
        )
    }
}

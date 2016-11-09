import React, { Component } from 'react';

export default class NavigationBar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            showSearchBar: false,
            inputText: ''
        }
        this.toggleSearchBar = this.toggleSearchBar.bind(this);
        this.toggleSearchBarOnEnter = this.toggleSearchBarOnEnter.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    toggleSearchBar() {
        this.setState({
            showSearchBar: ! this.state.showSearchBar
        })
    }

    toggleSearchBarOnEnter(e) {
        if(e.key && e.key == 'Enter') {
            this.setState({
                showSearchBar: ! this.state.showSearchBar
            })
        }
    }

    handleTextChange(e) {
        this.setState({
            inputText: e.target.value
        });
        this.props.store.searchText(e.target.value);
    }

    render() {
        return (<nav className="navbar navbar-default visible-xs">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <p className="logo-title">Marvelous!</p>
                        </a>
                        <div className="options pull-right">
                            <span 
                                className="glyphicon glyphicon-search padding-right-25" 
                                onClick={this.toggleSearchBar}
                            ></span>
                            <span 
                                className="glyphicon glyphicon-option-vertical" 
                                onClick={this.props.toggle}
                            ></span>
                        </div>
                    </div>
                    <input 
                        value={this.state.inputValue}
                        onChange={this.handleTextChange}
                        onKeyDown={this.toggleSearchBarOnEnter}
                        className={`custom-search hide ${ this.state.showSearchBar ? "show" : "" }`} 
                        type="text" /> 
                </div>
            </nav>
        );
    }
}

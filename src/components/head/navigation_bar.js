import React, { Component } from 'react';

export default class NavigationBar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            showSearchBar: false,
            inputText: ''
        }
        this.toggleSearchBar = this.toggleSearchBar.bind(this);
    }

    toggleSearchBar() {
        this.setState({
            showSearchBar: ! this.state.showSearchBar
        })
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
                        className={`custom-search hide ${ this.state.showSearchBar ? "show" : "" }`} 
                        type="text" /> 
                </div>
            </nav>
        );
    }
}

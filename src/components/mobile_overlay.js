import React, { Component } from 'react';

import FormArea from './body/form_area';

export default class MobileOverLay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: false
        }
        this.closeOverlay = this.closeOverlay.bind(this);
    }

    closeOverlay() {
        this.setState({
            hide: true
        })
    }

    render() {
        const removeStyles = {
            color: '#FFF',
            margin: '50px',
            fontSize: '25px'
        }
        return <div className={`mobile-overlay ${ this.state.hide ? "hide-overlay" : "" }`}>
            <div className="pull-right">
                <i 
                    className="glyphicon glyphicon-remove" 
                    style={removeStyles}
                    onClick={this.closeOverlay}
                > </i>
            </div>
            <div className="container mobile-container">
                <FormArea {...this.props} className="col-md-12"/>
            </div>
        </div>
    }
}

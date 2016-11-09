import React, { Component } from 'react';

import FormArea from './body/form_area';

export default class MobileOverLay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false 
        }
        this.closeOverlay = this.closeOverlay.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ show: nextProps.show });
    }

    closeOverlay() {
        this.setState({
            show: false
        })
    }

    render() {
        const removeStyles = {
            color: '#FFF',
            margin: '50px',
            fontSize: '25px'
        }
        return <div className={`mobile-overlay hide-overlay ${ this.state.show ? "show-overlay" : "" }`}>
            <div className="pull-right">
                <i 
                    className="glyphicon glyphicon-remove" 
                    style={removeStyles}
                    onClick={this.closeOverlay}
                > </i>
            </div>
            <div className="container mobile-container">
                <FormArea {...this.props} closeOverLay={this.closeOverlay} className="col-md-12"/>
            </div>
        </div>
    }
}

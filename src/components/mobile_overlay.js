import React, { Component } from 'react';

import FormArea from './body/form_area';

export default class MobileOverLay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false 
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ show: nextProps.show });
    }

    render() {
        return <div className={`mobile-overlay hide-overlay ${ this.state.show ? "show-overlay" : "" }`}>
            <div className="pull-right">
                <i 
                    className="glyphicon glyphicon-remove glyphicon-custom" 
                    onClick={this.props.toggleOverLay}
                > </i>
            </div>
            <div className="container mobile-container">
                <FormArea {...this.props} 
                    showOverLay={this.state.show} 
                    toggleOverLay={this.props.toggleOverLay} 
                    className="col-md-12"
                />
            </div>
        </div>
    }
}

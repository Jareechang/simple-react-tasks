import React, { Component } from 'react';
import _ from 'lodash';

/* App style imports */
require('../../styles/application.scss'); 

/* utility */

/* Middleware */
import ObserverMiddleWare from '../middleware/observer_middleware';

/* Store */
import itemStore from '../stores/item_store';

/* Components */
import NavigationBar from './head/navigation_bar';
import TitleSection from './head/title_section';
import SectionLabel from './body/section_label';
import FormArea from './body/form_area';
import Column from './body/column';
import MobileOverLay from './mobile_overlay';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            store: itemStore,
            show: false
        };
        this.toggleOverLay = this.toggleOverLay.bind(this);
    }

    toggleOverLay() {
        this.setState({ show: !this.state.show })
    }

    render() {
        return (
            <div>
                <NavigationBar toggle={this.toggleOverLay}/>
                <div className="container main-container">
                    <div className="col-md-12">
                        <TitleSection />
                    </div>
                    <div className="col-md-12">
                        <SectionLabel />
                    </div>
                    <div className="content-section">
                        <ObserverMiddleWare store={this.state.store}>
                            <MobileOverLay show={this.state.show}/>
                            <FormArea showOverLay={this.state.show} className="col-md-4 hidden-xs"/>
                            <Column columnTitle="COLUMN 1" className="col-md-4" />
                            <Column columnTitle="COLUMN 2" className="col-md-4"/>
                        </ObserverMiddleWare>
                    </div>
                </div>
            </div>
        );
    }
}

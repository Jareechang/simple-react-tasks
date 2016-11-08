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
import TitleSection from './head/title_section';
import SectionLabel from './body/section_label';
import FormArea from './body/form_area';
import Column from './body/column';
import SearchBar from './search_bar';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            store: itemStore
        };
    }

    render() {
        return (
            <div className="container main-container">
                <div className="col-md-12">
                    <TitleSection />
                </div>
                <div className="col-md-12">
                    <SectionLabel />
                </div>
                <div className="content-section">
                    <ObserverMiddleWare store={this.state.store}>
                        <FormArea store={itemStore} className="col-md-4"/>
                        <Column columnTitle="COLUMN 1" className="col-md-4" />
                        <Column columnTitle="COLUMN 2" className="col-md-4"/>
                        <SearchBar className="col-md-12"/>
                    </ObserverMiddleWare>
                </div>
            </div>
        );
    }
}

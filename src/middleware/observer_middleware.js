import React, { Component } from 'react';

export default class ObserverMiddleWare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listeners: [],
            store: null,
            children: null
        };
        this.registerListener = this.registerListener.bind(this);
        this.emitChangeEvent = this.emitChangeEvent.bind(this);
    }

    componentWillMount() {
        this.props.store.emitChangeEvent = this.emitChangeEvent;
        this.state.store = this.props.store;
    }

    componentDidMount() {
        this.props.store.add({ text: 'Ruby Programming', column: 'COLUMN_ONE'});
        this.props.store.add({ text: 'Python Programming', column: 'COLUMN_TWO'});
        this.props.store.add({ text: 'Java Programming', column: 'COLUMN_TWO'});
        this.props.store.add({ text: 'salad', column: 'COLUMN_ONE'});
    }

    registerListener(item) {
        this.state.listeners.push(item);
    }

    emitChangeEvent() {
        this.state.listeners.forEach((component) => {
            component.updateState({
                columnTitle: component.column,
                items: _.filter(this.state.store.collectionClone(), component.reducer)
            })
        })
    }

    childrenWithProps() {
        return React.Children.map(this.props.children, 
            (child) => React.cloneElement(child, {
                registerListener: this.registerListener,
                emitChangeEvent: this.emitChangeEvent,
                store: this.state.store
            })
        );
    }

    render() {
        return ( <div className="col-md-12">
            { this.childrenWithProps() }
            </div>
        );
    }
}

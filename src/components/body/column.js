import React, { Component } from 'react';

export default class Column extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnTitle: '',
            items: null 
        };
        this.updateState = this.updateState.bind(this);
    }

    componentWillMount() {
        let column = this.props.columnTitle;
        const columnFilter = (column) => {
            return column.replace(/\s\d/, (m) => {
                const numberMap = {
                    1 : "ONE",
                    2 : "TWO"
                }
                return `_${numberMap[m.trim()]}`;
            })
        }
        this.props.registerListener({
            column: column,
            updateState: this.updateState,
            reducer: (data) => data.column == columnFilter(column)
        });
    }

    updateState(updates) {
        this.setState(updates);
    }

    renderItems() {
        let randomKey = () => {
            return `item${Math.random() * 110}`;
        }
        return this.state.items.map(
            (item) => {
                return <div key={randomKey()}>
                    <p> 
                        {item.text} 
                        <span 
                            onClick={this.props.store.remove(item.id)}
                        >
                        x
                        </span>
                    </p>
                </div>
        });
    }

    getClassName() {
        return `column-section ${this.props.className || " "}`;
    }

    render() {
        let getColumnTitle = () => {
            return (this.state.columnTitle || 
                    this.props.columnTitle);
        }
        return (
            <div className={this.getClassName()}>
                <div className="head-section">
                    <p className="title"> { getColumnTitle() }</p>
                </div>
                { this.state.items && this.renderItems() }
            </div>
        )
    }
}

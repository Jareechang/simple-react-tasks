import React, { Component } from 'react';

export default class FormArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            column: null
        }
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.renderColumnItems = this.renderColumnItems.bind(this);
    }

    handleTextChange(e) {
        this.setState({
            inputText: e.target.value
        });
    }

    handleClick(option) {
        return () => {
            this.setState({
                column: option
            })
        }
    }

    renderColumnOptions() {
        return [{ name: 'Column 1', value: 'COLUMN_ONE'},
                { name: 'Column 2', value: 'COLUMN_TWO'}]
                .map(option => 
                    <li key={option.value} className="option" onClick={this.handleClick(option)}>{option.name}</li> 
                )
    }

    handleAddItem(event) {
        if(event.key && event.key != 'Enter') {
            return;
        }

        if(!!this.state.column) {
            switch(this.state.column.value) {
                case "COLUMN_ONE":
                    this.props.store.add({ text: this.state.inputText, 
                                           column: this.state.column.value });
                    break;
                case "COLUMN_TWO":
                    this.props.store.add({ text: this.state.inputText, 
                                           column: this.state.column.value });
                    break;
                default:
                    console.warn("some options are not selected properly");
                    break;
            }
            this.setState({ inputText: '' });
        }
    }

    renderColumnItems(items) {
        return items.map(item => 
            <h1 key={item.text}> 
                { item.text } 
            </h1>
        );
    }

    render() {
        return <div className={`main__form-area ${this.props.className}`}>
            <input 
                type="text"
                className="custom-form-group"
                placeholder="ENTER ITEM"
                onKeyDown={this.handleAddItem}
                value={this.state.inputText}
                onChange={this.handleTextChange}
            />
           <div className="dropdown dropdown-custom">
              <button 
                    className="btn btn-default dropdown-toggle custom-select" 
                    type="button" 
                    id="dropdownMenu1" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="true"
                >

                { !! this.state.column ? this.state.column.name : "CHOOSE A COLUMN" }

                <span className="caret pull-right"></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                { this.renderColumnOptions() }
              </ul>
            </div>  

            <button 
                className="btn btn-default" 
                onClick={this.handleAddItem}
            >
                Add Item
            </button>
        </div>
    }
}

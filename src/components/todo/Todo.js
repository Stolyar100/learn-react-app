import React, { Component } from 'react';

import './todo.css';

export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value});
    }

    handleClick() {

    }

    render() {
        return (
            <div className="todo">
                <div className="todo__add-block">
                    <input
                    className="todo__input"
                    type="text"
                    placeholder="enter task"
                    value={this.state.value}
                    onChange={this.handleChange}
                    />
                    <button className="todo__add-btn">add</button>
                </div>
                <div className="todo__list"></div>
            </div>
        );
    }
}

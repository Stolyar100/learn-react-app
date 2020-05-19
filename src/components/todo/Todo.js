import React, { Component } from 'react';

export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };
    }

    render() {
        return (
            <div className="todo">
                <input
                    className="todo__input"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <div className="todo__list"></div>
            </div>
        );
    }
}

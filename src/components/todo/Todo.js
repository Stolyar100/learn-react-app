import React, { Component } from 'react';
import TodoItem from './TodoItem';

import './Todo.css';
import './TodoItem.css';

export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            idForTodo: '4',
            todos: [
                {
                    id: 0,
                    title: 'Sit at the bottom of apple tree',
                },
                {
                    id: 1,
                    title: 'Avoid getting hit by falling apple',
                },
                {
                    id: 2,
                    title: '???',
                },
                {
                    id: 3,
                    title: 'Explain gravity',
                },
            ],
        };
        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    addTodo() {
        if (this.state.value.trim().length === 0) {
            this.setState({ value: '' });
            return;
        }

        this.setState((state) => ({
            todos: [
                ...state.todos,
                {
                    id: state.idForTodo,
                    title: state.value,
                },
            ],
            value: '',
            idForTodo: state.idForTodo++,
        }));
    }

    render() {
        const todoList = this.state.todos.map((todo) => (
            <TodoItem title={todo.title} key={todo.id} />
        ));
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
                    <button className="todo__add-btn" onClick={this.addTodo}>
                        add
                    </button>
                </div>
                <div className="todo__list">{todoList}</div>
            </div>
        );
    }
}

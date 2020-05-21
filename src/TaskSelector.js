import React, { Component } from 'react';
import Task1 from './components/task1/Task1';
import ComponentA from './components/task2/ComponentA';
import Todo from './components/todo/Todo';
import {SignInForm} from './components/form/Form';

export default class TaskSelector extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            value: '0',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    render() {
        let currentComponent = <></>;
        switch (this.state.value) {
            case '0':
                currentComponent = <h3>Choose task</h3>;
                break;
            case '1':
                currentComponent = <Task1 />;
                break;
            case '2':
                currentComponent = <ComponentA />;
                break;
            case '3':
                currentComponent = <Todo />;
                break;
            case '4':
                currentComponent = <SignInForm />;
                break;
            default:
                currentComponent = <h3>Something wentWrong</h3>;
                break;
        }
        
        return (
            <>
                <select 
                value={this.state.value}
                onChange={this.handleChange}>
                    <option value="0" disabled>Choose Task</option>
                    <option value="1">Task1</option>
                    <option value="2">Task2</option>
                    <option value="3">Todo</option>
                    <option value="4">Form</option>
                </select>
                {currentComponent}
            </>
        )
    }
}

import React, { Component } from 'react';
import ShowValue from './ShowValue';

export default class Task1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            value: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event);
        this.setState({value: event.target.value});
    }
    
    render() {
        return (
            <div>
                <p>
                    Введіть значення
                </p>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <ShowValue value={this.state.value}/>
            </div>
        )
    }
}

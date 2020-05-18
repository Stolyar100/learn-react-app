import React, { Component } from 'react';
import ComponentB from './ComponentB';

export default class ComponentA extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
        };
        this.handleClick = this.handleClick.bind(this);
        this.getRandom = this.getRandom.bind(this);
    }

    handleClick() {
        this.setState({value: this.getRandom()});
    }

    getRandom() {
        return Math.random();
    }
    render() {
        return (
            <div>
                <ComponentB
                    handleClick={this.handleClick}
                />
                <p>{this.state.value * 1000}</p>
            </div>
        );
    }
}

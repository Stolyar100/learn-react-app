import React from 'react';
import ComponentC from './ComponentC';

export default function ComponentB(props) {
    return (
        <div>
            <ComponentC
                handleClick={props.handleClick}
            />
        </div>
    );
}

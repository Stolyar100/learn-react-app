import React from 'react';

export default function ComponentC(props) {
    return (
        <div>
            <button onClick={props.handleClick}>Get random value</button>
        </div>
    );
}

import React from 'react'

export default function TodoItem(props) {
    return (
        <div className="todo__item">
            {props.title}
        </div>
    )
}

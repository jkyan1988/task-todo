import React from 'react'

const TodoItem = ({ item, index, deleteTodoItem, completeTodoItem, updateTodoItem }) => {
    return (
        <div className='todo-list'>
            <li style={{
                textDecoration: item.complete ? "line-through" : "",
                fontStyle: item.complete ? "italic" : "",
                color: item.complete ? "grey" : ""
            }}>{item.todo}</li>
            <div className="btns">
                <button onClick={() => completeTodoItem(index)}>Finished</button>
                <button onClick={() => updateTodoItem(index)}>Edit</button>
                <button onClick={() => deleteTodoItem(index)}>X</button>
            </div>
        </div>
    )
}

export default TodoItem
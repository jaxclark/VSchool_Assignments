import React from 'react'
import Todo from "./Todo"

function TodoList({todos}) {
    const mappedTodos = todos.map(todo => <Todo {...todo} />)

    return (
        <div>
            {mappedTodos}
        </div>
    )
}

export default TodoList

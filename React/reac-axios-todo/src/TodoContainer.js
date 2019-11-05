import React from 'react'
import Todo from './Todo'


const TodoContainer = ({todos}) => {
    const mappedTodos = todos.map(todo => <Todo {...todo} />)
    
    return (
        <div>
            {mappedTodos}
        </div>
    )
}

export default TodoContainer
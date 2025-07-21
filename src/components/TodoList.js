import React from 'react'

const TodoList = ({todos, handleComplete}) => {

  return (
    <div>
      <h2>Child Component</h2>
      <ul>
            {
                todos.map(todo => (
                <li key={todo.id}>
                    <p>{todo.text} - {todo.completed ? 'Completed': 'Not Completed'} </p>
                    {
                        !todo.completed && (
                            <button onClick={() => handleComplete(todo.id)}>Complete</button>
                        )
                    }
                </li>

                ))
            }
      </ul>
    </div>
  )
}

export default TodoList

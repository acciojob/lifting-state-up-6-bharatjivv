import React from 'react'

const TodoList = ({todos, handleComplete}) => {
  return (
    <div>
      <ul>
        <h2>Child Component</h2>
            {
              todos.map(each => {
                return (
                  <li key={each.text}>
                    <p>{each.text}</p>
                    {!each.completed && <button onClick={() => handleComplete(each.text)}>Completed</button>}

                  </li>
                )
              })
            }
      </ul>
    </div>
  )
}

export default TodoList





// {
// todos.map(todo => (
// <li key={todo.text}>
// <p>{todo.text}</p>
// {
// !todo.completed && (
//   <button onClick={() => handleComplete(todo.text)}>Complete</button>
// )
// }
// </li>

// ))
// }
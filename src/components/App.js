import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn HTML', completed: false },
    { id: 3, text: 'Learn Javascript', completed: false }
  ]);

  const handleComplete = (id) => {
    
    setTodos((prevTodos) => 
      prevTodos.map(todo => todo.id === id ? {...todo, completed: true } : todo)
    );
  };
  
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent component</h1>
        <TodoList todos = {todos} handleComplete = {handleComplete}/>
    </div>
  )
}

export default App

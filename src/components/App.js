
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";
import Parent from "./Parent";

const todoList = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Deploy the React app', completed: false }
]

const App = () => {
    const [todos, setTodos] = useState(todoList);

  // const handleComplete = (text) => {
  //   setTodos((prevTodos) => {
  //     const updated = prevTodos.map(todo => todo.text === text ? {...todo, completed: true } : todo);
  //     console.log("updated todos : ", updated)
  //     return updated;
  //   });
  // };

  const handleComplete=(text)=>{
      const reWrite=todos.map(each=>each.text===text?{text:each.text, completed:true}:each)
      setTodos(reWrite)
  }
  
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent component</h1>
        <TodoList todos = {todos} handleComplete = {handleComplete}/> 
        {/* <Parent/> */}
    </div>
  )
}

export default App
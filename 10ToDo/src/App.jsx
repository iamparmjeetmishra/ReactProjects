import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [tasks, setTasks] = useState('')

  const changeHandler = (e) => {
    // e.preventDefault();
    setTasks(e.target.value)
  }

  const addTodo = () => {
   setTodos([...todos, tasks])
  }

  return (
    <>
      <h2>Todo App Basic</h2>
      <input type='text' onChange={changeHandler} placeholder='add your todo' />
      <button onClick={addTodo}>Add</button>
      <ul>
        
        { todos.map((todo, index) => (
          <li key={index}>{ todo }</li>
         ))
        }
      </ul>
    </>
  )
}

export default App

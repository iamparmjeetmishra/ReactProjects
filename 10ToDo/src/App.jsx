import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState('John')

  const changeHandler = (e) => {
    // e.preventDefault();
    setTodos(e.value)
  }

  const addTodo = () => {
    console.log('add')
  }

  return (
    <>
      <h2>Todo App Basic</h2>
      <input type='text' onChange={changeHandler} placeholder='add your todo' />
      <button onClick={addTodo}>Add</button>
      <ul>
        <li>{todos}</li>
        {/* { todos.map((todo, index) => (
          <li key={index}>{ todo }</li>
         ))
        } */}
      </ul>
    </>
  )
}

export default App

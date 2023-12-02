import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [tasks, setTasks] = useState('')

  const inputTask = useRef(null)

  const changeHandler = (e) => {
    // e.preventDefault();
    setTasks(e.target.value)
  }

  const addTodo = () => {
    setTodos([...todos, {task: tasks, completed: false}])
    inputTask.current.value = ''
  }

  // Del Todo

  const todoDel = (taskToDel) => {
    setTodos(todos.filter((task) => {
      return task.task !== taskToDel;
    }))
  }

  // Edit 
  const editTodo = () => {

  }

  // Complete
  const todoComp = () => {

  }

  return (
    <>
      <h2>Todo App Basic</h2>
      <input type='text' ref={inputTask} onChange={changeHandler} placeholder='add your todo' />
      <button onClick={addTodo}>Add</button>
      <hr />
      <ul>
        
        {todos.map((todo, index) => {
          return (
            <div key={index}>
              <button onClick={() => todoComp(todo)}>Comp</button>
              <li key={index}>{todo.task}</li>
              <button onClick={() => editTodo(todo)}>Edit</button>
              <button onClick={() => todoDel(todo)}>Del</button>
            </div>
          )
        })}
      </ul>
    </>
  )
}

export default App

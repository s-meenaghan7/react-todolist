import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === '') return;

    const newTodo = todo;
    setTodos([...todos, newTodo]);
    setTodo('');
  }

  return (
    <div className='App'>
      <div className='navbar'>
        <div className='menu-button'></div>
        <h1>My Todos</h1>
      </div>

      <div className='todolist'>
        {
          todos.map((todo, i) => 
            <Todo key={i} todo={todo}/>)
        }
      </div>

      <div className='controls'>
        <input
          type='text'
          value={todo}
          id='todo-input'
          placeholder='Create new todo...'
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          id='add-todo-btn'
          type='button'
          onClick={() => addTodo()}
        >+</button>
      </div>
    </div>
  )
}

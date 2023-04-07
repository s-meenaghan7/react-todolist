import { useState } from 'react';
import './AppContainer.css';
import Todo from './components/Todo';

export default function AppContainer() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === '') return;

    const newId = todos.at(-1) ? todos.at(-1).id + 1 : 1;
    const newTodo = { id: newId, todo: todo };
    setTodos([...todos, newTodo]);
    setTodo('');
  }

  const removeTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  return (
    <div className='container'>
      <div className='navbar'>
        <div className='menu-button'></div>
        <h1>My Todos</h1>
      </div>

      <div className='todolist'>
        {
          todos.map((todo) => 
            <Todo key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
            />
          )
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

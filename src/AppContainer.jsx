import { useState } from 'react';
import './AppContainer.css';
import Todo from './components/Todo';

export default function AppContainer() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
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
        <div style={{ "display": "flex", "alignItems": "center" }}>
          <div className='menu-button'></div>
          <h1>My Todos</h1>
        </div>
        <div>
          <span style={{ "marginRight": "25px" }}>
            {todos.length} {todos.length === 1 ? 'Todo' : 'Todos'}
          </span>
        </div>
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

      <form className='controls' onSubmit={addTodo}>
        <input
          type='text'
          value={todo}
          id='todo-input'
          placeholder='Create new todo...'
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          id='add-todo-btn'
          type='submit'
        >+</button>
      </form>
    </div>
  )
}

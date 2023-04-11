import { useState } from 'react';
import './TodoList.css';
import Todo from './components/Todo';
import AddTodoControls from './components/AddTodoControls';
import MenuBar from './components/MenuBar';

export default function TodoList() {
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
      <MenuBar 
        todoCount={todos.length}
      />

      <div className='todolist'>
        {
          todos.map((todo, i) =>
            <Todo key={todo.id}
              todo={todo}
              position={i + 1}
              removeTodo={removeTodo}
            />
          )
        }
      </div>

      <AddTodoControls 
        todo={todo}
        setTodo={setTodo}
        addTodo={addTodo}
      />
    </div>
  )
}
import { useState } from 'react';
import './TodoList.css';
import Todo from './components/Todo';
import AddTodoControls from './components/AddTodoControls';
import MenuBar from './components/MenuBar';

export default function TodoList({ showCompletedTodos }) {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

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

  // function to move the designated (completed) todo from todos to completeTodos.

  return (
    <div className='inner-container'>
      <MenuBar
        todoCount={todos.length}
      />

      <div className='todolist'>
        {
          showCompletedTodos ?
            completeTodos.map((completeTodo, i) =>
              <Todo key={completeTodo.id}
                todo={completeTodo}
                position={i + 1}
                removeTodo={removeTodo}
              />
            )
            :
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

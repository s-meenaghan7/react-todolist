import { useRef, useState } from 'react';
import './TodoList.css';
import Todo from './components/Todo';
import AddTodoControls from './components/AddTodoControls';
import MenuBar from './components/MenuBar';

export default function TodoList({ showCompletedTodos }) {
  const nextId = useRef(1);
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (todo.trim() === '') return;

    // const newId = todos.at(-1) ? todos.at(-1).id + 1 : 1;
    const newTodo = { id: nextId.current, todo: todo };

    nextId.current = nextId.current + 1;
    setTodos([...todos, newTodo]);
    setTodo('');
  }

  const removeTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  // const moveTodoToCompleteTodos = (id) => {
  //   const completedTodo = todos.find(todo => todo.id === id);

  //   setCompleteTodos([...completeTodos, completedTodo]);
  //   removeTodo(id);
  // }

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
                // moveTodoToCompleteTodos={moveTodoToCompleteTodos}
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

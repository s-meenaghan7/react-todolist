import { useRef, useState } from 'react';
import './TodoList.css';
import TodoComponent from './components/TodoComponent';
import AddTodoControls from './components/AddTodoControls';
import MenuBar from './components/MenuBar';
import { Todo } from './types/Todo';

type TodoListProps = {
  showCompletedTodos: boolean;
};

const TodoList: React.FC<TodoListProps> = ({ showCompletedTodos }) => {
  const nextId = useRef(1);
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim() === '') return;

    const newTodo = { id: nextId.current, todo: todo, isComplete: false };

    nextId.current = nextId.current + 1;
    setTodos([...todos, newTodo]);
    setTodo('');
  }

  const removeTodo = (todo: Todo) => {
    setTodos(todos => todos.filter(t => t.id !== todo.id));
  }

  const completeTodo = (todo: Todo) => {
    setCompletedTodos([...completedTodos, { ...todo, isComplete: true }]);
    removeTodo(todo);
  }

  return (
    <div className='inner-container'>
      <MenuBar
        showCompletedTodos={showCompletedTodos}
        todoCount={showCompletedTodos ? completedTodos.length : todos.length}
      />

      <div className='todolist'>
        {
          showCompletedTodos ?
            completedTodos.map((completedTodo, i) =>
              <TodoComponent key={completedTodo.id}
                todo={completedTodo}
                position={i + 1}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            )
            :
            todos.map((todo, i) =>
              <TodoComponent key={todo.id}
                todo={todo}
                position={i + 1}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            )
        }
      </div>

      <AddTodoControls
        todo={todo}
        setTodo={setTodo}
        addTodo={addTodo}
        disabled={showCompletedTodos}
      />
    </div>
  )
}

export default TodoList;

import React, { useState } from 'react';
import '../styles/Todo.css';

export default function Todo({ todo, position, removeTodo, completeTodo }) {
  const [thisTodo, setThisTodo] = useState(todo.todo);
  const [isUpdating, setIsUpdating] = useState(false);

  const startUpdating = () => {
    if (!todo.isComplete) setIsUpdating(true);
  }

  const exitUpdating = (e) => {
    e.preventDefault();

    if (thisTodo.trim() !== '')
      setIsUpdating(false);
  }

  return (
    <div className='todo'>
      <span>
        {position}.
      </span>
      {
        !isUpdating ?
          <span
            id='todo-data'
            onDoubleClick={() => startUpdating()}
          >
            {thisTodo}
          </span>
          :
          <form autoComplete='off' onSubmit={exitUpdating}>
            <input
              autoFocus
              type='text'
              value={thisTodo}
              id='edit-todo-input'
              onBlur={(e) => exitUpdating(e)}
              onChange={(e) => setThisTodo(e.target.value)}
            />
            <input type='submit' style={{ "display": "none" }} />
          </form>
      }
      {
        todo.isComplete ?
          null
          :
          <div className='btn-container'>
            <button
              type='button'
              id='edit-btn'
              title='Edit todo'
              onClick={() => startUpdating()}
            >
              <span className="material-icons-outlined">edit</span>
            </button>
            <button
              type='button'
              id='delete-btn'
              title='Delete todo'
              onClick={() => removeTodo(todo.id)}
            >
              <span className="material-icons-outlined">delete</span>
            </button>
            <button
              type='button'
              id='complete-btn'
              title='Complete todo'
              onClick={() => completeTodo(todo)}
            >
              <span className="material-icons-outlined">done</span>
            </button>
          </div>
      }
    </div>
  );
}

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
              title='Edit this todo'
              onClick={() => startUpdating()}
            >
              EDIT
            </button>
            <button
              type='button'
              id='delete-btn'
              title='Delete this todo'
              onClick={() => removeTodo(todo.id)}
            >
              DELETE
            </button>
            <button
              type='button'
              id='complete-btn'
              title='Mark this todo completed'
              onClick={() => completeTodo(todo)}
            >
              DONE
            </button>
          </div>
      }
    </div>
  );
}

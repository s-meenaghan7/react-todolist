import React, { useState } from 'react';
import '../styles/Todo.css';

export default function Todo({ todo, position, removeTodo }) {
  const [thisTodo, setThisTodo] = useState(todo.todo);
  const [isEditing, setIsEditing] = useState(false);

  const updateThisTodo = (e) => {
    e.preventDefault();

    if (thisTodo.trim() !== '')
      setIsEditing(false);
  }

  return (
    <div className='todo'>
      <span>
        {position}.
      </span>
      {
        !isEditing ?
          <span
            id='todo-data'
            onDoubleClick={() => setIsEditing(true)}
          >
            {thisTodo}
          </span>
          :
          <form autoComplete='off' onSubmit={updateThisTodo}>
            <input
              autoFocus
              type='text'
              value={thisTodo}
              id='edit-todo-input'
              onBlur={(e) => updateThisTodo(e)}
              onChange={(e) => setThisTodo(e.target.value)}
            />
            <input type='submit' style={{ "display": "none" }} />
          </form>
      }
      <div>
        <button
          type='button'
          id='edit-btn'
          title='Edit this todo'
          onClick={() => setIsEditing(true)}
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
      </div>
    </div>
  );
}

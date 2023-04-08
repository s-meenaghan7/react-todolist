import React, { useState } from 'react';
import '../styles/Todo.css';

export default function Todo({ todo, removeTodo }) {
  const [thisTodo, setThisTodo] = useState(todo.todo);
  const [isEditing, setIsEditing] = useState(false);

  const updateThisTodo = (e) => {
    e.preventDefault();

    if (thisTodo.trim() !== '')
      setIsEditing(false);
  }

  return (
    <div className='todo'>
      {
        !isEditing ?
          thisTodo
          :
          <form onSubmit={updateThisTodo}>
            <input
              type='text'
              value={thisTodo}
              onChange={(e) => setThisTodo(e.target.value)}
              onBlur={(e) => updateThisTodo(e)}
            />
            <input type='submit' style={{ "display": "none" }} />
          </form>
      }
      <div>
        <button
          type='button'
          id='edit-btn'
          onClick={() => setIsEditing(true)}
        >
          EDIT
        </button>
        <button
          type='button'
          id='delete-btn'
          onClick={() => removeTodo(todo.id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

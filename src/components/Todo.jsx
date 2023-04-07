import React from 'react';
import '../styles/Todo.css';

export default function Todo({ todo, removeTodo }) {
  return (
    <div className='todo'>
      {todo.todo}
      <div>
        <button
          type='button'
          className='delete-btn'
          onClick={() => removeTodo(todo.id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

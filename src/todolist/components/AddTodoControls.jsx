import React from 'react';
import '../styles/AddTodoControls.css';

export default function AddTodoControls({ todo, setTodo, addTodo, disabled }) {
  return (
    <form
      className='controls'
      autoComplete='off'
      onSubmit={addTodo}
    >
      <input
        required
        type='text'
        value={todo}
        id='todo-input'
        disabled={disabled}
        placeholder='Create new todo...'
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type='submit'
        id='add-todo-btn'
        title='Add todo'
        disabled={disabled}
      >
        <span className="material-icons-round" id='add-todo-btn-icon'>add</span>
      </button>
    </form>
  );
}

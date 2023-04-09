import React from 'react';
import '../styles/AddTodoControls.css';

export default function AddTodoControls({ todo, setTodo, addTodo }) {
  return (
    <form
      className='controls'
      autoComplete='off'
      onSubmit={addTodo}
    >
      <input
        type='text'
        value={todo}
        id='todo-input'
        placeholder='Create new todo...'
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        id='add-todo-btn'
        type='submit'
      >+</button>
    </form>
  );
}

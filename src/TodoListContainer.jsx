import React, { useState } from 'react';
import TodoList from './todolist/TodoList';
import './TodoListContainer.css';

export default function TodoListContainer() {
  const [showCompletedTodos, setShowCompletedTodos] = useState(false);

  return (
    <div className='container'>
      <div className='tab-container'>
        <div className='tab left'>
          <input
            type='radio'
            name='todo'
            value={false}
            id='incomplete'
            defaultChecked
            onChange={() => setShowCompletedTodos(false)}
          />
          <label className='left' htmlFor='incomplete'>
            In Progress
          </label>
        </div>
        <div className='tab right'>
          <input
            type='radio'
            name='todo'
            value={true}
            id='complete'
            onChange={() => setShowCompletedTodos(true)}
          />
          <label className='right' htmlFor='complete'>
            Complete
          </label>
        </div>
      </div>

      <TodoList
        showCompletedTodos={showCompletedTodos}
      />

    </div>
  )
}

import React from 'react';
import TodoList from './todolist/TodoList';
import './TodoListContainer.css';

export default function TodoListContainer() {

  return (
    <div className='container'>
      <div className='tab-container'>
        <div className='tab left'>
          <input
            type='radio'
            name='todo'
            value='In Progress'
            id='incomplete'
            defaultChecked
          />
          <label className='left' htmlFor='incomplete'>
            In Progress
          </label>
        </div>
        <div className='tab right'>
          <input
            type='radio'
            name='todo'
            value='Complete'
            id='complete'
          />
          <label className='right' htmlFor='complete'>
            Complete
          </label>
        </div>
      </div>

      <TodoList />

    </div>
  )
}

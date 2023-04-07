import React from 'react';
import '../styles/Todo.css';

export default function Todo({ todo }) {
  return (
    <div className='todo'>
      {todo}
    </div>
  );
}

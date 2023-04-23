import React from 'react';
import '../styles/MenuBar.css';

export default function MenuBar({ todoCount, showCompletedTodos }) {
  return (
    <header className='menu-bar'>
      <h2>My Todos</h2>
      <div>
        <span style={{ "marginRight": "25px" }}>
          {todoCount} {todoCount === 1 ? 'Todo' : 'Todos'} {showCompletedTodos ? "Complete" : "In Progress"}
        </span>
      </div>
    </header>
  );
}

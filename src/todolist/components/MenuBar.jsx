import React from 'react';
import '../styles/MenuBar.css';

export default function MenuBar({ todoCount, showCompletedTodos }) {
  return (
    <header className='menu-bar'>
      <div className='header'>
        <button
          id='menu-btn'
          type='button'
          disabled={showCompletedTodos}
        >
          <span
            className="material-icons-outlined"
            style={{ "fontSize": "25px" }}
          >
            menu
          </span>
        </button>
        <h2>My Todos</h2>
      </div>
      <div>
        <span style={{ "marginRight": "25px" }}>
          {todoCount} {todoCount === 1 ? 'Todo' : 'Todos'} {showCompletedTodos ? "Complete" : "In Progress"}
        </span>
      </div>
    </header>
  );
}

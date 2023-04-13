import React from 'react';
import '../styles/MenuBar.css';

export default function MenuBar({ todoCount }) {
  return (
    <header className='menu-bar'>
      <div style={{ "marginLeft": "25px"}}>
        <h2>My Todos</h2>
      </div>
      <div>
        <span style={{ "marginRight": "25px" }}>
          {todoCount} {todoCount === 1 ? 'Todo' : 'Todos'}
        </span>
      </div>
    </header>
  );
}

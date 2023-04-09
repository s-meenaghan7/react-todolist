import React from 'react';
import '../styles/MenuBar.css';

export default function MenuBar({ todoCount }) {
  return (
    <div className='menu-bar'>
      <div style={{ "display": "flex", "alignItems": "center" }}>
        <div className='menu-button'></div>
        <h1>My Todos</h1>
      </div>
      <div>
        <span style={{ "marginRight": "25px" }}>
          {todoCount} {todoCount === 1 ? 'Todo' : 'Todos'}
        </span>
      </div>
    </div>
  );
}

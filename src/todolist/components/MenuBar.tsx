import React from 'react';
import '../styles/MenuBar.css';

type MenuBarProps = {
  todoCount: number;
  showCompletedTodos: boolean;
};

const MenuBar: React.FC<MenuBarProps> = ({ todoCount, showCompletedTodos }) => {
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

export default MenuBar;

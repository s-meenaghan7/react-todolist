import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import TodoListContainer from './TodoListContainer'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoListContainer />
  </React.StrictMode>,
)

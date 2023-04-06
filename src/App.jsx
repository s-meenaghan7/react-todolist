import './App.css';

function App() {

  const addTodo = () => {
    alert('TODO');
  }

  return (
    <div className='App'>
      <div className='navbar'>
        <div className='menu-button'></div>
        <h1>My Todos</h1>
      </div>

      <div className='todolist'>

      </div>

      <div className='controls'>
        <input
          type='text'
          id='todo-input'
          placeholder='Create new todo...'
        />
        <button
          id='add-todo-btn'
          onClick={() => addTodo()}
        >+</button>
      </div>
    </div>
  )
}

export default App

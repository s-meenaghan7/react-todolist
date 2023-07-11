import React from 'react';

type TodoActionsButtonGroupProps = {
  visibility: boolean;
  editFunction: () => void;
  deleteFunction: React.Dispatch<React.SetStateAction<boolean>>;
  completeFunction: React.Dispatch<React.SetStateAction<boolean>>;
};

const TodoActionsButtonGroup: React.FC<TodoActionsButtonGroupProps> = ({ visibility, editFunction, deleteFunction, completeFunction }) => {
  return (
    <div className='btn-container' style={{ "visibility": visibility ? "visible" : "hidden" }}>
      <button
        type='button'
        id='edit-btn'
        title='Edit todo'
        onClick={() => editFunction()}
      >
        <span className="material-icons-outlined todo-btn-icon">edit</span>
      </button>
      <button
        type='button'
        id='delete-btn'
        title='Delete todo'
        onClick={() => deleteFunction(true)}
      >
        <span className="material-icons-outlined todo-btn-icon">delete</span>
      </button>
      <button
        type='button'
        id='complete-btn'
        title='Complete todo'
        onClick={() => completeFunction(true)}
      >
        <span className="material-icons-outlined todo-btn-icon">done</span>
      </button>
    </div>
  );
}

export default TodoActionsButtonGroup;

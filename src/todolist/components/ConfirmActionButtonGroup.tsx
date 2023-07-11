import React from 'react';
import { Todo } from '../types/Todo';

type ConfirmActionButtonGroupProps = {
  confirmArg: Todo;
  confirmFunction: (todo: Todo) => void;
  cancelFunction: React.Dispatch<React.SetStateAction<boolean>>;
};

const ConfirmActionButtonGroup: React.FC<ConfirmActionButtonGroupProps> = ({ confirmArg, confirmFunction, cancelFunction }) => {
  return (
    <div className='btn-container'>
      <button
        type='button'
        id='complete-btn'
        title='Confirm'
        onClick={() => confirmFunction(confirmArg)}
      >
        <span className="material-icons-outlined todo-btn-icon">done</span>
      </button>
      <button
        type='button'
        id='cancel-btn'
        title='Cancel'
        onClick={() => cancelFunction(false)}
      >
        <span className='material-icons-round todo-btn-icon'>close</span>
      </button>
    </div>
  );
}

export default ConfirmActionButtonGroup;

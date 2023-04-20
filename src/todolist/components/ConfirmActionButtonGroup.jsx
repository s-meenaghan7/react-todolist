import React from 'react';

export default function ConfirmActionButtonGroup({ confirmArg, confirmFunction, cancelFunction }) {
  return (
    <div className='btn-container'>
      <button
        type='button'
        id='complete-btn'
        title='Confirm'
        onClick={() => confirmFunction(confirmArg)}
      >
        <span className="material-icons-outlined">done</span>
      </button>
      <button
        type='button'
        id='cancel-btn'
        title='Cancel'
        onClick={() => cancelFunction(false)}
      >
        <span className='material-icons-round'>close</span>
      </button>
    </div>
  );
}

import React, { useState } from 'react';
import '../styles/Todo.css';
import '../styles/TodoActionsButtonGroup.css';
import ConfirmActionButtonGroup from './ConfirmActionButtonGroup';
import TodoActionsButtonGroup from './TodoActionsButtonGroup';
import { Todo } from '../types/Todo';

type TodoComponentProps = {
  todo: Todo;
  position: number;
  removeTodo: (todo: Todo) => void;
  completeTodo: (todo: Todo) => void;
};

type EventUnion = React.FocusEvent<HTMLInputElement, Element> | React.FormEvent<HTMLFormElement>;

const TodoComponent: React.FC<TodoComponentProps> = ({ todo, position, removeTodo, completeTodo }) => {
  const [thisTodo, setThisTodo] = useState(todo.todo);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isPendingDelete, setIsPendingDelete] = useState(false);
  const [isPendingComplete, setIsPendingComplete] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const startUpdating = () => {
    if (!todo.isComplete) setIsUpdating(true);
  }

  const exitUpdating = (e: EventUnion) => {
    if (typeof e === 'object' && e !== null && 'preventDefault' in e)
      e.preventDefault();

    if (thisTodo.trim() !== '') setIsUpdating(false);
  }

  return (
    <div
      className={`todo ${isPendingDelete ? 'pending-delete' :
        isPendingComplete || todo.isComplete ? 'pending-complete' : ''}`}
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      <span>
        {position}.
      </span>
      { /* ---------- TODO CONTENT ---------- */
        isPendingDelete ?
          <span>
            Delete this todo?
          </span>
          :
          isPendingComplete ?
            <span>
              Complete this todo?
            </span>
            :
            !isUpdating ?
              <span
                id='todo-data'
                onDoubleClick={() => startUpdating()}
              >
                {thisTodo}
              </span>
              :
              <form autoComplete='off' onSubmit={exitUpdating}>
                <input
                  autoFocus
                  type='text'
                  value={thisTodo}
                  id='edit-todo-input'
                  onBlur={(e) => exitUpdating(e)}
                  onChange={(e) => setThisTodo(e.target.value)}
                />
                <input type='submit' style={{ "display": "none" }} />
              </form>
      }
      { /* ---------- TODO BUTTONS ---------- */
        todo.isComplete ?
          null
          :
          isUpdating && thisTodo.trim() === '' && !isPendingDelete ?
            <TodoActionsButtonGroup
              visibility={showButtons}
              editFunction={startUpdating}
              deleteFunction={setIsPendingDelete}
              completeFunction={() => null}
            />
            :
            isPendingDelete ?
              <ConfirmActionButtonGroup
                confirmArg={{ ...todo, todo: thisTodo }}
                confirmFunction={removeTodo}
                cancelFunction={setIsPendingDelete}
              />
              :
              isPendingComplete ?
                <ConfirmActionButtonGroup
                  confirmArg={{ ...todo, todo: thisTodo }}
                  confirmFunction={completeTodo}
                  cancelFunction={setIsPendingComplete}
                />
                :
                <TodoActionsButtonGroup
                  visibility={showButtons}
                  editFunction={startUpdating}
                  deleteFunction={setIsPendingDelete}
                  completeFunction={setIsPendingComplete}
                />
      }
    </div>
  );
}

export default TodoComponent;

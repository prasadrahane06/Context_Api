import { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-items-store";
function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div classNameName="container">
      <div classNameName="row kg-row">
        <div classNameName="col-6">{todoName}</div>
        <div classNameName="col-4">{todoDate}</div>
        <div classNameName="col-2">
          <button
            type="button"
            classNameName="btn btn-danger kg-button"
            onClick={() => deleteItem(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

import { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div classNameName={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;

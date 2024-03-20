import styles from "./WelcomeMessage.module.css";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../Store/todo-items-store";
import { useContext } from "react";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && (
      <p classNameName={styles.welcome}>Enjoy Your Day</p>
    )
  );
};

export default WelcomeMessage;

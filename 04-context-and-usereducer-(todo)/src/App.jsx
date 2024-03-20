import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState, useReducer } from "react";
import { TodoItemsContext } from "./Store/todo-items-store";
import reducer from "./Store/todo-reducer";

//reducer function

function App() {
  // const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatch] = useReducer(reducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    dispatch({ type: "NEW_ITEM", name: itemName, dueDate: itemDueDate });
  };

  // const newTodoItems = [
  //   ...todoItems,
  //   { name: itemName, dueDate: itemDueDate },
  // ];
  // setTodoItems(newTodoItems);

  const deleteItem = (todoItemName) => {
    dispatch({ type: "DELETE_ITEM", name: todoItemName });
    // const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    // setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center classNameName="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;

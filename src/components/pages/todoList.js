import React from "react";
import TodoList from "../todoList";

const TodoListPage = () => {
  return (
    <section style={{ height: "100vh" }}>
      <h1>ToDo list</h1>
      <TodoList />
    </section>
  );
};

export default TodoListPage;

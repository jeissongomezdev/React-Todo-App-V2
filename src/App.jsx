import React, { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";

export const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, title: title, complete: false };
    setTodos([todo, ...todos]);
  };

  return (
    <div className="todo">
      <h2 className="todo__title">Lista de Tareas</h2>
      <TodoForm addTodo={addTodo} />
      <hr className="separator" />
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

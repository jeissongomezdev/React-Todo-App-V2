import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="todo__input"
        placeholder="Agrega una tarea..."
      />
      <button type="submit" className="todo__add-btn">
        Agregar
      </button>
    </form>
  );
};

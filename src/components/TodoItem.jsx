import React from "react";

export const TodoItem = (props) => {
  const { todo } = props;

  return (
    <div className={todo.complete ? "todo-row complete" : "todo-row"}>
      {todo.title}
      <div className="iconsContainer"></div>
    </div>
  );
};

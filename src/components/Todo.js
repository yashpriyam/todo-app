import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = ({ todos, onDelete, onComplete, todoUpdate }) => {
  console.log({ todos });
  return (
    <div className="todos-container">
      <h1 className=" my-3">Todos List</h1>
      {todos?.length === 0
        ? "No Todos to Display"
        : todos?.map((todo, index) => {
            return (
              <TodoItem
                todo={todo}
                key={index}
                onComplete={onComplete}
                onDelete={onDelete}
                todoUpdate={todoUpdate}
              />
            );
          })}
    </div>
  );
};

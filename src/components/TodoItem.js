import React, { useState } from "react";

export const TodoItem = ({ todo, onDelete, onComplete, todoUpdate }) => {
  const [updateTodo, setUpdateTodo] = useState({
    title: "",
    description: "",
  });

  const [update, setUpdate] = useState(false);
  return (
    <>
      <div className="todo-container">
        <div className="title-container">
          {update ? (
            <input
              type="text"
              name="title"
              placeholder="Todo Title"
              className="form-control"
              value={updateTodo.title}
              onChange={(e) =>
                setUpdateTodo({
                  ...updateTodo,
                  [e.target.name]: e.target.value,
                })
              }
              id="title"
            />
          ) : (
            <h4>{todo.title}</h4>
          )}
          <div className="btn-container">
            {update ? (
              <button
                className="update-btn"
                onClick={() => {
                  todoUpdate(updateTodo);
                  setUpdate(false)
                }}
              >
                Update
              </button>
            ) : (
              <button
                className="update-btn"
                onClick={() => {
                  setUpdateTodo({
                    title: todo.title,
                    description: todo.description,
                  });
                  setUpdate(true);
                }}
              >
                Edit
              </button>
            )}
            <button
              className={
                todo.completed
                  ? "done-btn done-btn-complete"
                  : "done-btn done-btn-incomplete"
              }
              onClick={() => {
                onComplete(todo);
              }}
            >
              Mark as completed
            </button>
            <button
              className="delete-btn"
              onClick={() => {
                onDelete(todo);
              }}
            >
              Delete
            </button>
          </div>
        </div>
        {update ? (
          <input
            type="text"
            name="description"
            placeholder="Todo Title"
            className="form-control"
            value={updateTodo.description}
            onChange={(e) =>
              setUpdateTodo({
                ...updateTodo,
                [e.target.name]: e.target.value,
              })
            }
            id="description"
          />
        ) : (
          <p>{todo.description}</p>
        )}
      </div>
    </>
  );
};

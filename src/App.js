import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Add } from "./components/Add";
import { Todos } from "./components/Todo";
import axios from "axios";
import { Footer } from "./components/Footer";
import useTodoFunction from "./customHooks/useTodoFunction";
function App() {
  const {
        todos,
        todoUpdate,
        onComplete,
        onDelete,
        addTodo
  } = useTodoFunction()

  return (
    <div className="App">
      <h1>Create TOdos </h1>
      <p>Make your Day more productive with me</p>
      <Add addTodo={addTodo} />
      <Todos onDelete={onDelete} todos={todos} onComplete={onComplete} todoUpdate={todoUpdate} />
      <Footer />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
function App() {
  const [todos, setTodos] = useState([])
  const getTodos = async () => {
    const result =  await fetch("https://6s9zat1ph8.execute-api.ap-south-1.amazonaws.com/Prod/todos")
    console.log({result});
    setTodos(result.formData.todos)
  }
  useEffect(() => {
    getTodos()
  }, [])
  
  
  return (
    <div className="App">
     <h1>Create TOdos </h1>
     <p>Make your Day more productive  with me</p>

    </div>
  );
}

export default App;

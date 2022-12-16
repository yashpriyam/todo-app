import axios from "axios";
import {useEffect, useState} from 'react'

const useTodoFunction = () => {
    const [todos, setTodos] = useState([
        {
          title: "Aws deploment",
          description: "To deploy the docker instance of backend on aws",
          completed: false,
        },
        {
          title: "Aws deploment",
          description: "To deploy the docker instance of backend on aws",
          completed: true,
        },
        {
          title: "Aws deploment",
          description: "To deploy the docker instance of backend on aws",
          completed: false,
        },
        {
          title: "Aws deploment",
          description: "To deploy the docker instance of backend on aws",
          completed: true,
        },
        {
          title: "Aws deploment",
          description: "To deploy the docker instance of backend on aws",
          completed: true,
        },
      ]);
      const getTodos = async () => {
        const result = await axios.get(
          "https://6s9zat1ph8.execute-api.ap-south-1.amazonaws.com/Prod/todos"
        );
        console.log({ result });
        setTodos(result.todos);
      };
      const addTodo = async (title, desc) => {
        console.log("I am Add Todo", title, desc);
        const result = await axios.post(
          "https://6s9zat1ph8.execute-api.ap-south-1.amazonaws.com/Prod/create",
          {
            title,
            description: desc,
          }
        );
        console.log({ result });
      };
      const onDelete = async (todo) => {
        console.log({ todo });
        const result = await axios.delete(
          "https://6s9zat1ph8.execute-api.ap-south-1.amazonaws.com/Prod/delete",
          {
            todoId: todo._id,
          }
        );
        console.log({ result });
      };
      const onComplete = async (todo) => {
        const result = await axios.post(
          `https://6s9zat1ph8.execute-api.ap-south-1.amazonaws.com/Prod/update/${todo._id}`
        );
        console.log({ result });
      };
      const todoUpdate = async (todo) => {
        console.log({todo});
        const result = await axios.post(
          `https://6s9zat1ph8.execute-api.ap-south-1.amazonaws.com/Prod/update/todo`,
          {
            id: todo._id,
            title: todo.title,
            description: todo.description,
          }
        );
        console.log({ result });
      };
      useEffect(() => {
        getTodos();
      }, [todoUpdate, ,onComplete, onDelete, addTodo]);

      return {
        getTodos, 
        todos,
        todoUpdate,
        onComplete,
        onDelete,
        addTodo
      }
}

export default useTodoFunction
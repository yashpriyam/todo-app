

import React,{useState} from 'react';

export const Add = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else{
            addTodo(title,desc);
            setTitle('');
            setDesc('');
        }
    }

  return (
    <div className = "container my-3">
      <form onSubmit = {submit}>
        <div className="mb-3">
          {/* <label htmlFor="title" className="form-label">
            Todo Title
          </label> */}
          <input
            type="text"
            placeholder='Todo Title'
            className="form-control"
            value = {title}
            onChange = {(e) => setTitle(e.target.value)}
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          {/* <label htmlFor="desc" className="form-label">
            Todo Description
          </label> */}
          <input
            type="text"
            className="form-control"
            placeholder='Todo Description'
            id="desc"
            value = {desc}
            onChange = {(e) => setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className="add-btn">
          Add Todo
        </button>
      </form>
    </div>
  );
};
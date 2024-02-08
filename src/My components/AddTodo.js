import React, { useState } from "react";


export const AddTodo = (props) => {

    const [title, setTitle] = useState("");  // use state is used to chage the state of a component from one state to another state 
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){   //  if title of description of the todo is blank then alert the user 
            alert("Title or Description cannot be blank");
        }   // this will not add the current todos in the main screen

        else{
          props.addTodo(title,desc); // add the todo to the screen by using the todo function 
          setTitle("");
          setDesc("");
        }

    }

  return (
    <div className="container my-3">
        <h3> Add a todo  </h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {setTitle(e.target.value)}}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />

        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {setDesc(e.target.value)}}  // whenever we want to change the desc setDesc function will be called 
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          add Todo
        </button>
      </form>
    </div>
  );
};

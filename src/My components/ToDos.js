import React from 'react';
import { ToDoItem } from './ToDoItem';

export const ToDos = ({ todos, onDelete }) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">ToDo List</h3>
      {/* Map through the 'todos' array and render ToDoItem for each todo */}
      {todos.length === 0 ? (
          <h3>No Todos to display</h3>
        ) : (
          todos.map((todo) => (
            <React.Fragment key={todo.sno}>
              <ToDoItem todo={todo} onDelete={onDelete} />
              <hr />
            </React.Fragment>
          ))
        )}
    </div>
  );
};

/**
 
***React routers are used to navigate between the pages withour reloading the web pages 

 */


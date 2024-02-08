import './App.css';
import Header from './My components/Header';
import Footer from './My components/Footer';
import { ToDos } from './My components/ToDos';
import React, { useState ,useEffect} from 'react';  // useEffect hook for maintaining and reloading the items on display
import { AddTodo } from './My components/AddTodo';


function App() {
  
  let initTodo;
  if(localStorage.getItem("todos") === null){ // if the localstorage.getItem == null then it wil
    initTodo = []
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am on Deleting",todo)

    /**
     Deleting this way in react does not work in react

     let index = todos.indexOf(todo);
     todos.splice(index,1);
     */

     // we will use setTodos for deleting an element after clicking on onDelete element 

     setTodos(todos.filter((e) =>{   // filter function will update the todos array
      return e !== todo;
     }))

     localStorage.setItem("todos",JSON.stringify(todos));
    }

  const addTodo = (title ,desc) => {                     // it is the function to add to do on the user screen
    console.log("I am adding this todo ", title , desc)
    let sno = 0;
    if(todos.length == 0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }  

    const myTodo = {
      sno : sno,
      title : title ,
      desc : desc
    }

    setTodos([...todos,myTodo]);
    console.log(myTodo); 

  }
  
  const [todos, setTodos] = useState([initTodo]); // initial state of todo

  useEffect(() => {                         // whenever todos changes this function will fire 
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  

  return ( 
    <>
      <Header title="MyToDoList" searchBar={true} />
      {/* Pass the 'todo' array as a prop to the ToDos component */}
      <AddTodo addTodo = {addTodo}/>
      <ToDos todos={todos} onDelete = {onDelete} />
      
      <Footer />
    </>
  );
}

export default App;



/**
 

****usestate Hooks

  syntax for using usestate hooks 
  
      const (todos, settodos) = useState();

      where todos = is a first function 
      and setTodos = the function which will update the todos

  **.filter functions :-

     this function will modify the array the syntax for the same function is used above 


 */
 
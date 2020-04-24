import React, { useState } from 'react';
import logo from './logo.svg';
import './todos.scss';

function TodoItem(todo_input) {
  const [todo_string, setTodoString] = useState(todo_input);
  const [isDone, setIsDone] = useState(false);

  return (
    <li onClick={() => setIsDone(!isDone)} className={isDone ? "completed" : ""} >
    <span><i class="fa fa-trash"></i></span> {todo_string}
    </li>
  );
}

function App() {

  return (
    <div className="main">
      <div id="container">
          <h1>To-Do List<i class="fa fa-plus"></i></h1>
          <input type="text" placeholder="Add New Todo" />
          
          <ul>
              {TodoItem("First item")}
              {TodoItem("Second item")}
              {TodoItem("Third item")}
          </ul>
      </div>
    </div>
  );
}

export default App;

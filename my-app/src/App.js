import React, { useState } from 'react';
import logo from './logo.svg';
import './todos.scss';

const TodoItem = ({ todo }) => {
  return (
    <li key={todo.key} className={todo.isDone ? "completed" : ""} >
    <span><i className="fa fa-trash"></i></span> {todo.text}
    </li>
  );
}

function TodoInput({ addTodo }) {
  const [value, setValue] = useState("");

  const handleKeyDown = (event) => {
    if(event.keyCode === 13) {   // press enter
      addTodo(value);
      setValue("");
    }
  };

  return (
    <input
      type="text"
      placeholder="Add New Todo" 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
      onKeyDown={handleKeyDown}
    />
  );
}

function App() {
  const [todos, setTodos] = useState(
    [ {text: "First item", isDone: false}, 
      {text: "Second item", isDone: false}, 
      {text: "Third item", isDone: false} ]
    );
  const [newTodoValue, setNewTodoValue] = useState("");

  const addTodo = (todo) => {
    const newTodos = [...todos, {text: todo, isDone: false}];
    setTodos(newTodos);
  };

  return (
    <div className="main">
      <div id="container">
          <h1>To-Do List<i className="fa fa-plus"></i></h1>
          <TodoInput addTodo={addTodo} />
          <ul>
              {todos.map((todo, index) => (
                <TodoItem 
                  key={index}
                  todo={todo}
                />
              ))}
          </ul>
      </div>
    </div>
  );
}

export default App;

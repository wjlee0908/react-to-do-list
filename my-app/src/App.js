import React, { useState } from 'react';
import logo from './logo.svg';
import './todos.scss';


const TodoItem = (props) => {
  const handleRemoveEvent = (event, index) => {
    props.removeTodo(index)
    event.stopPropagation();
  }  

  return (
    <li key={props.key} className={props.todo.isCompleted ? "completed" : ""} onClick={() => props.toggleCompleteTodo(props.index)}>
    <span onClick={(event) => handleRemoveEvent(event, props.index)}><i className="fa fa-trash"></i></span> {props.todo.text}
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
    [ {text: "First item", isCompleted: false}, 
      {text: "Second item", isCompleted: false}, 
      {text: "Third item", isCompleted: false} ]
    );

  const addTodo = (todo) => {
    const newTodos = [...todos, {text: todo, isCompleted: false}];
    setTodos(newTodos);
  };

  const toggleCompleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !(newTodos[index].isCompleted);
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    console.log(newTodos);
    setTodos(newTodos);
  }

  return (
    <div className="main">
      <div id="container">
          <h1>To-Do List<i className="fa fa-plus"></i></h1>
          <TodoInput addTodo={addTodo} />
          <ul>
              {todos.map((todo, index) => (
                <TodoItem 
                  key={index}
                  index={index}
                  todo={todo}
                  toggleCompleteTodo = {toggleCompleteTodo}
                  removeTodo = {removeTodo}
                />
              ))}
          </ul>
      </div>
    </div>
  );
}

export default App;

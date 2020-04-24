import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main">
      <div id="container">
          <h1>To-Do List<i class="fa fa-plus"></i></h1>
          <input type="text" placeholder="Add New Todo"/>
          
          <ul>
              <li><span><i class="fa fa-trash"></i></span> Go To Potions Class</li>
              <li><span><i class="fa fa-trash"></i></span> Buy New Robes</li>
              <li><span><i class="fa fa-trash"></i></span> Visit Hagrid</li>
          </ul>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import TodoCardContainer from './containers/TodoCardContainer';
import AddTodoContainer from './containers/AddTodoContainer';

const App = () => (
  <div className="container">
    {/* <div className="row justify-content-md-center">
      <AddTodo />
    </div> */}
    <div className="row justify-content-md-center">
      <TodoCardContainer />
      <AddTodoContainer />
    </div>
  </div>
);

export default App;

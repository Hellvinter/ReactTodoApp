import React, { useState } from "react";
import "./styles.css";

import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState([
    { task: "Write the awesome story", completed: false },
    { task: "Read what you wrote", completed: false },
    { task: "Understand that you still horrible", completed: false }
  ]);
  console.log(todos);

  const Todo = ({ todo, index, Completed, Erase }) => {
    let done = todo.completed;
    let completedContainer = {
      color: done ? "#454a54" : "",
      backgroundColor: done ? "rgba(232,204,25, .6)" : ""
    };
    let completedTask = { textDecoration: done ? "line-through" : "" };
    return (
      <div className="Todo-item" style={completedContainer}>
        <div>
          <p className="Todo-item--task" style={completedTask}>
            {todo.task}
          </p>
        </div>
        <div>
          <button className="Todo-completed" onClick={() => Completed(index)}>
            Done
          </button>
          <button className="Todo-erase" onClick={() => Erase(index)}>
            X
          </button>
        </div>
      </div>
    );
  };

  const addTodo = task => {
    const newTodo = [...todos, { task }];
    setTodos(newTodo);
  };

  const Completed = index => {
    const newTodo = [...todos];
    newTodo[index].completed = true;
    setTodos(newTodo);
  };

  const Erase = index => {
    const removeTodo = [...todos];
    removeTodo.splice(index, 1);
    setTodos(removeTodo);
  };

  return (
    <div className="App">
      <div className="Todo">
        <div className="Todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              Completed={Completed}
              Erase={Erase}
            />
          ))}
        </div>
        <div className="Todo-form">
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;

//Comments about how I can implement const Todo but by other way
// my personal component const Done = ({ todos }) => todos.map(todo => <div>{todo.task}</div>);
// actually I can not to pass a parametr to const Done. It will be like this:
// const DealWithIt = () => todos.map(todo => <div>{todo.task}</div>);
// and it still will work (with this function better dont pus param it's seems pointless for now)

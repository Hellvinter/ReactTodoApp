import React, { useState } from "react";

// I will create one more component right now
// It's will be form wich add one more todo to our to do list
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  // create event handler function
  const handleSubmit = e => {
    e.preventDefault();
    value ? addTodo(value) : setValue("");
  };

  const changeInput = e => setValue(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add task"
        value={value}
        onChange={changeInput}
        className="Todo-form--input"
      />
    </form>
  );
};

export default TodoForm;

// Then we create a button that will clear our task
// from todo board
// in order to do it we need to check
// that our task is complete because
// we don't wanna be bad guys and erase incomplete tasks
// so we need conditional statement which check that for us
// after we check we remove child element from DOM
// with .remove method BUT we don't forget about INDEX
// of a child we also need check INDEX of COMPLETED CHILD
// and remove child with only completed task
//also we must remove our remove button and check button
//from the DOM and be sure that our child's display
// properly

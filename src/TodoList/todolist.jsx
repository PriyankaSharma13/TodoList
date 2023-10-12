import React, { useState } from "react";
import pen from "../assets/pen.png";
import "./todolist.css";

//  ------------Current time show  -----
let time = new Date();
const showTime =
  time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [checked, setChecked] = useState(false);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddButton = () => {
    setTodos([
      ...todos,
      { text: inputValue, id: todos.length + 1, currentTime: showTime, isChecked:checked },
    ]);
    setInputValue("");
  };

  const handleCheckBox = (e) => {
    console.log("checked", checked)
    setChecked(!checked);
  };

  const handleDeleteButton = (id) => {
    const remove = todos.filter((todo) => todo.id !== id);
    setTodos(remove);
    // console.log(todos);
  };
  return (
    <>
      <article className="todo-app">
        <div className="todo-cover">
          <h1 className="todo-heading">ToDo List</h1>
        </div>
        <section className="input-container">
          <input
            type="text"
            placeholder="type here....."
            className="do-input1"
            onChange={handleInput}
            value={inputValue}
          />

          <button
            type="submit"
            className="todo-check"
            onClick={handleAddButton}
          >
            <img src={pen} width={"20px"} height={"20px"} alt="" />
          </button>
        </section>
        <div className="card-container">
          {todos?.map((todo, index) => (
            <div className="todo-card" key={index}>
              <input
                type="checkbox"
                onChange={handleCheckBox}
              value={checked.checked}
            checked={checked}

                className="check-todo"
              ></input>

              <span className={"todo-card-text "} >{todo.text}</span>
              <span className="todo-current-time">{todo.currentTime}</span>

              <button
                className="todo-Delete"
                onClick={() => handleDeleteButton(todo.id)}
              >
                detele 
              </button>
            </div>
          ))}
        </div>
      </article>
    </>
  );
};

export default TodoList;

// function secondsToHMS(seconds) {
//   // Calculate hours, minutes, and seconds
//   const hours = Math.floor(seconds / 3600);
//   const remainingSeconds = seconds % 3600;
//   const minutes = Math.floor(remainingSeconds / 60);
//   const remainingSecondsFinal = remainingSeconds % 60;

//   // Pad single-digit minutes and seconds with leading zeros
//   const paddedMinutes = String(minutes).padStart(2, "0");
//   const paddedSeconds = String(remainingSecondsFinal).padStart(2, "0");

//   // Return the formatted time as HH:MM:SS
//   return `${hours}:${paddedMinutes}:${paddedSeconds}`;
// }

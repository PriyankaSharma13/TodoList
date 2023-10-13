import React, { useEffect, useState } from "react";
import pen from "../assets/pen.png";
import plus from "../assets/plus.png";
import "./todolist.css";




const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isEdit,setIsEdit] = useState(null)
  const [currentTime, setCurrentTime] = useState("")



//  ------------show cureent Time  -----
  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();
      setCurrentTime(
        time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
    const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddButton = () => {
    
    if (isEdit === null) {
      setTodos([...todos, 
        { 
          text: inputValue, 
          id:todos.length + 1,
           currentTime: currentTime, 
           completed: false  
          }
        ]);
    } else {
      todos[isEdit].text = inputValue;
      setTodos([...todos]);
      setIsEdit(null);
    }

    setInputValue('');
  };

  const toggleCompleted =(id) =>{

    setTodos((checked) =>
    checked.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
    
  }
  
 const handleEditButton =(id) => {
  console.log("hii")
  const index = todos.findIndex((todo) => todo.id === id)
  setInputValue(todos[index].text);
    setIsEdit(index);
 }

  const handleDeleteButton = (id) => {
    const remove = todos.filter((todo) => todo.id !== id);
    setTodos(remove);
   
  };


  const handleDeleteAll = () => {
    
    setTodos([]);
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
            onClick={ handleAddButton}
          >
             <img src={isEdit !== null ? pen : plus} width={"20px"} height={"20px"} alt="" />
           

          </button>
        </section>
        <div className="card-container">
          {todos.map((todo) => (

            <div className={`todo-card ${todo.completed ? 'line-through' : ''}`} key={todo.id} >
 
              <input
                type="checkbox"
                onChange={() => toggleCompleted(todo.id)}
                checked={todo.completed}
                className="check-todo"
                >

              </input>
              <span className="todo-card-text">{todo.text}</span>
              <span className="todo-current-time">{todo.currentTime}</span>

              <span className="editbtn">
                <button
                  style={{ marginRight: "30px" }}
                  className="todo-Edit"
                  onClick={() => handleEditButton(todo.id)}
                >
                  Edit
                </button>
                <button
                  className="todo-Delete"
                  onClick={() => handleDeleteButton(todo.id)}
                >
                  detele
                </button>
              </span>

            </div>
          ))}
        </div>
       
        <button className="delete-all-button" onClick={handleDeleteAll}>
          Delete All
        </button>
      </article>
    </>
  );
}
export default TodoList;


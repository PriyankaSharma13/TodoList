import { useState } from "react";
import "./App.css";
// import SinglePage from "./singlePage.jsx";
import TodoList from "./TodoList/todolist";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      {/* <SinglePage /> */}
      <TodoList />
    </div>
  );
}

export default App;

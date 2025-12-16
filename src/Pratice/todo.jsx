import { useState } from "react";
import "./todo.css"

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    setTasks([...tasks, task]);
    setTask("");
  }

  function del(){
    
  }
  return (
    <div>
      <h1>To Do App</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        { tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>

      <button onClick={del}> Delete: </button>
    </div>
  );
}

export default Todo;

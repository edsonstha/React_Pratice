import React from "react";
import "./todo.css";

function Todo() {

  function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
    if (task === "") 
      return alert("Empty Value");

    const ul = document.getElementById("taskList");
    const li = document.createElement("li");
    li.textContent = task;
    ul.appendChild(li);

    input.value = "";
  }

  function deleteAll() {
    // input = "";
    document.getElementById("taskList").innerHTML = "";
  }

  return (
    <div>
      <h1>To-Do App</h1>
      <input type="text" id="taskInput" placeholder="Enter task" />
      <button onClick={addTask}>Add</button>
      <button onClick={deleteAll}>Delete All</button>

      <ul id="taskList" style={{ listStyleType: "none", paddingLeft: 0, marginTop: "20px" }}></ul>
    </div>
  );
}

export default Todo;

import React, { useState } from "react";
import "./index.css";
function TodoList() {
  const [task, setTask] = useState([
    "Eat Breakfast",
    "Go for a walk",
    "Read a book"
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputchange(event) {
    setNewTask(event.target.value);
  }

  function AddTask() {
    if (newTask.trim() !== "") {
      setTask(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
  }

  function moveTaskup(index) {
    if (index > 0) {
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index - 1]] =
        [updatedTasks[index - 1], updatedTasks[index]];
      setTask(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < task.length - 1) {
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index + 1]] =
        [updatedTasks[index + 1], updatedTasks[index]];
      setTask(updatedTasks);
    }
  }

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={handleInputchange}  className="add"
      />
      <button onClick={AddTask}  className="add-tt">Add</button>

      <ol>
        {task.map((task, index) => (
          <li key={index}>
            <span>{task}</span>

            <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
            <button className="move-btn" onClick={() => moveTaskup(index)}>👆</button>
            <button className="move-btn" onClick={() => moveTaskDown(index)}>👇</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;

"use client";
import {  useState } from "react";

export default function ToDo() {
  const tasks = [
    { id: 1, name: "Task-1" },
    { id: 2, name: "Task-2" },
  ];
  const [task, setTasks] = useState(tasks);
  const [addTask, setAddTask] = useState("");

  function handleClick() {
    if (addTask.trim() !== "") {
      const newTask = { id: task.length + 1, name: addTask };
      setTasks([...tasks, newTask]);
      setAddTask("");
    }
  }

  return (
    <main
      style={{
        minHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f4f4",
      }}
    >
      <div>
      <input
        type="text"
        value={addTask}
        onChange={(e) => setAddTask(e.target.value)}
      />
      <br />
      <button onClick={handleClick}>Add Task</button>
      <h3>To Do List</h3>
      <ul>
        {task.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
      </div>
    </main>
  );
}

"use client";

import { useState, useCallback } from "react";

type t={
  id:number,
  task:string,
  isComplete:boolean
  
}

export default function TaskList() {
  const list: t[] = [
    { id: 1, task: "Task-1", isComplete: false },
    { id: 2, task: "Task-2", isComplete: false },
    { id: 3, task: "Task-3", isComplete: false },
  ];

  const [tasks, setTask] = useState(list);

  const toggle = useCallback((id:number) => {
    setTask((prevTask) =>
      prevTask.map((t) =>
        t.id === id ? { ...t, isComplete: !t.isComplete } : t
      )
    );
  },[]);

  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            color: task.isComplete ? "green" : "black",
            marginBottom: "8px",
          }}
        >
          {task.task}
          <button onClick={() => toggle(task.id)}>
            {task.isComplete ? "Completed" : "Complete"}
          </button>
        </li>
      ))}
    </ul>
  );
}

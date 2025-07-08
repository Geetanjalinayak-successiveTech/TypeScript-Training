"use client";

import { useState } from "react";


type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

export default function ToDo() {
  const [toDo, setToDo] = useState<Todo[]>([]);
  const [inputVal, setInput] = useState<string>("");

  const addTask = () => {
    if (inputVal.trim() === "") return;

    const newToDo: Todo = {
      id: Date.now(),
      task: inputVal,
      completed: false,
    };

    setToDo([...toDo, newToDo]);
    setInput("");
  };

  const updateToDo = (id: number) => {
    const update = toDo.map((ele) =>
      ele.id === id ? { ...ele, completed: !ele.completed } : ele
    );
    setToDo(update);
  };

  const deleteToDo = (id: number) => {
    const delToDo = toDo.filter((ele) => ele.id !== id);
    setToDo(delToDo);
  };

  return (
    <div>
      <h2>To Do</h2>
      <input
        type="text"
        placeholder="Enter task"
        value={inputVal}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      {toDo.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => updateToDo(todo.id)}
          />
          {todo.task}
          <button onClick={() => deleteToDo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

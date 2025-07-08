// Create a functional component named TaskList that accepts an array of task names as a prop.
//Use the map function to render each task name as a list item.
//Import and render the TaskList component in the App component with an array of tasks.

"use client"
type Task = {
  taskID: number;
  taskName: string;
};

type TaskListProps = {
  tasks: Task[];
};

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <>
      <h1>Tasks</h1>
      {tasks.map((task) => (
        <li key={task.taskID}>{task.taskName}</li>
      ))}
    </>
  );
}

import TaskList from "../components/question-5";

const task = [
  {
    taskID: 1,
    taskName: "Badminton",
  },
  {
    taskID: 2,
    taskName: "Chess",
  },
  {
    taskID: 3,
    taskName: "football",
  },
];
export default function printTask() {
  return <TaskList tasks={task} />;
}

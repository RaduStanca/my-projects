import React from "react";
import { useState } from "react";
import TaskViewer from "./components/task-viewer/TaskViewer";
import "./App.css";
const data = [
  {
    id: "T-1",
    status: "Todo",
    name: "11Create a Design System for Enum Workspace.",
    dueDate: new Date(2022, 10, 24),
  },

  {
    id: "T-2",
    status: "In progress ",
    name: "12Create a Design System for Enum Workspace.",
    dueDate: new Date(2022, 10, 30),
  },

  {
    id: "T-3",
    status: "Completed",
    name: "13Create a Design System for Enum Workspace.",
    dueDate: new Date(2022, 11, 10),
  },

  {
    id: "T-4",
    status: "Done",
    name: "14Create a Design System for Enum Workspace.",
    dueDate: new Date(2022, 11, 15),
  },

  {
    id: "T-5",
    status: "Todo",
    name: "11Create a Design System for Enum Workspace.",
    dueDate: new Date(2022, 10, 24),
  },

  {
    id: "T-6",
    status: "In progress",
    name: "11Create a Design System for Enum Workspace.",
    dueDate: new Date(2022, 10, 24),
  },
];

function App() {
  const [taskList, setTaskList] = useState(data);

  const onNewTaskAdd = (newTask) => {
    setTaskList((prevState) => [
      ...prevState,
      {
        ...newTask,
        dueDate: new Date(newTask.dueDate),
        id: "T-" + prevState.length + 1,
      },
    ]);
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <TaskViewer onNewTaskAdd={onNewTaskAdd} taskList={taskList} />
      </div>
    </div>
  );
}
export default App;

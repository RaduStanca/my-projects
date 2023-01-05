import React from "react";
import { useState } from "react";
import "./App.css";
import TaskViewer from "./components/task-viewer/TaskViewer";
import CreateTaskForm from "./components/forms/CreateTaskForm";

const data = [
  {
    id: "T-1",
    status: "Todo",
    name: "11Create a Design System for Enum Workspace.",
    dueDate: new Date(2022, 10, 24),
  },

  {
    id: "T-2",
    status: "In progres ",
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
];

function App() {
  const [taskList, setTaskList] = useState(data);

  const onNewTaskAdd = (newTask) => {
    console.log("task form App.js", newTask);
    setTaskList((prevState) => [
      ...prevState,
      {
        ...newTask,
        dueDate: new Date(newTask.dueDate),
        id: "T-" + prevState.length + 1,
      },
    ]);

    /* const taskToAdd = {
      ...newTask,
      dueDate: new Date(newTask.dueDate),
    }; */
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <TaskViewer taskList={taskList} />

        <div className="side-bar-right">
          <div className="card-xl">
            <h3>Create task</h3>
            <CreateTaskForm addNewTask={onNewTaskAdd} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

// return React.createElement(
//   'div',
//   {
//     className: "app-container"
//   },
//   React.createElement(
//     'div',
//     {
//       className: "app-content"
//     },
//     React.createElement("h3", {}, ""),
//     React.createElement(TaskViewer, { taskList: data })
//   )
// );

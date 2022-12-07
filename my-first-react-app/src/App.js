import "./App.css";
import TaskViewer from "./components/task-viewer/TaskViewer";

function App() {
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

  return (
    <div className="app-container">
      <div className="app-content">
        <h3>Task Manager</h3>
        <TaskViewer taskList={data} />
      </div>
    </div>
  );
}

export default App;

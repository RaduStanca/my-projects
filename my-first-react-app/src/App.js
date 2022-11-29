import "./App.css";
import TaskCard from "./components/task-card/TaskCard";

function App() {
  const data = [
    {
      id: "T-1",
      status: "Todo",
      name: "Create a Design System for Enum Workspace.",
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
  ];

  return (
    <div className="app-container">
      <TaskCard
        id={data[0].id}
        status={data[0].status}
        name={data[0].name}
        dueDate={data[0].dueDate}
      />

      <TaskCard
        id={data[1].id}
        status={data[1].status}
        name={data[1].name}
        dueDate={data[1].dueDate}
      />

      <TaskCard
        id={data[2].id}
        status={data[2].status}
        name={data[2].name}
        dueDate={data[2].dueDate}
      />
    </div>
  );
}

export default App;

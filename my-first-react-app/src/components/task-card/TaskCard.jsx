import React from "react";
import "./TaskCard.css";
import Badge from "../badge/Badge";
import DateContainer from "../date-container/DateContainer";

function TaskCard(props) {
  const getBadgeStyle = () => {
    switch (props.status) {
      case "Todo":
        return "grey";
      case "In progress":
        return "blue";
      case "Completed":
        return "green";
      case "Done":
        return "orange";
      default:
        return "grey";
    }
  };
  return (
    <div className="card-wrapper">
      <div className="card-header">
        <p className="task-id">{props.id}</p>
        <Badge label={props.status} color={getBadgeStyle()} />
      </div>
      <div className="card-content">
        <p>{props.name}</p>
      </div>
      <div className="card-footer">
        <DateContainer dueDate={props.dueDate} />
      </div>
    </div>
  );
}

export default TaskCard;

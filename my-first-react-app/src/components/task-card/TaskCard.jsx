// import React, { useState } from "react";
import React from "react";
import "./TaskCard.css";
import Badge from "../badge/Badge";
import DateContainer from "../date-container/DateContainer";

function TaskCard(props) {
  // const [counter, setCounter] = useState(0);
  // let nr = 0;

  // console.log("Render " + counter + "" + props.id);
  // console.log("Nr " + nr);

  // const handleClick = () => {
  //   setCounter(counter + 1);
  //   console.log("cnt", counter);
  //   nr = nr + 3;
  // };
  return (
    <div className="card-wrapper">
      <div className="card-header">
        <p className="task-id">{props.id}</p>
        <Badge status={props.status} />
      </div>
      <div className="card-content">
        <p>{props.name}</p>
        {/* <p>{counter}</p> */}
      </div>
      <div className="card-footer">
        {/* <button onClick={handleClick}>Increment!</button> */}
        <DateContainer dueDate={props.dueDate} />
      </div>
    </div>
  );
}

export default TaskCard;

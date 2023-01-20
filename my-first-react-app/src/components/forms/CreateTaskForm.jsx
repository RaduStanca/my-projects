import React, { useState, useEffect } from "react";
import "./CreateTaskForm.css";

const CreateTaskForm = (props) => {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [formValidation, setFormValidation] = useState({
    taskName: "",
    dueDate: "",
    taskDetails: "",
    isValid: true,
  });

  useEffect(() => {
    if (taskName.length === 0) {
      setFormValidation((prevState) => ({
        ...prevState,
        taskName: "This field is Required!! ",
        isValid: false,
      }));
    } else {
      setFormValidation((prevState) => ({
        ...prevState,
        taskName: "",
        isValid: true,
      }));
    }
  }, [taskName]);

  const handleNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setTaskDetails(event.target.value);
  };

  const resetForm = () => {
    setTaskName("");
    setDueDate("");
    setTaskDetails("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      name: taskName,
      dueDate: dueDate,
      taskDetails: taskDetails,
      status: "To Do",
    };

    props.addNewTask(newTask);
    console.log("newTask=", newTask);
    resetForm();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="label-md">Task Name</label>
          <input
            value={taskName}
            name="taskName"
            onChange={handleNameChange}
            className={`input-primary ${formValidation.taskName && "error"}`}
            type="text"
          />
          <p className="error-mesage">{formValidation.taskName}</p>
        </div>

        <div className="form-row">
          <label className="label-md">Due Date</label>
          <input
            value={dueDate}
            name="dueDate"
            onChange={handleDateChange}
            className="input-primary"
            type="date"
          />
          <p className="error-mesage "></p>
        </div>

        <div className="form-row">
          <label className="label-md">Task Details</label>
          <textarea
            value={taskDetails}
            name="taskDetails"
            onChange={handleDetailsChange}
            className="input-primary"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <p className="error-mesage "></p>
        </div>
        <button
          disabled={!formValidation.isValid}
          className="button-primary"
          type="submit"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;

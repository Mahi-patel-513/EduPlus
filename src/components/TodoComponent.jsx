import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TodoComponent.css";

const TodoComponent = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();

  const addTask = () => {
    if (taskTitle.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDesc,
      dueDate: dueDate,
      status: "not-started",
    };

    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = [...existingTasks, newTask];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setTaskTitle("");
    setTaskDesc("");
    setDueDate("");

    // Redirect to Task List Page
    navigate("/tasks");
  };

  return (
    <div className="main-container">
      <div className="todo-container">
        <h1 className="todo-heading">Add Your Task</h1>
        <div className="task-input">
          <input
            type="text"
            placeholder="Enter Task Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <textarea
            placeholder="Enter Task Description"
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
          ></textarea>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button className="add-task-btn" onClick={addTask}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoComponent;

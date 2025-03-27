import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TodoComponent.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({ id: null, title: "", description: "", dueDate: "", status: "in-progress" });
  const navigate = useNavigate();

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = savedTasks.map((task) => {
      const today = new Date().toISOString().split("T")[0];
      if (task.status !== "completed") {
        if (task.dueDate && task.dueDate < today) task.status = "missed";
        else task.status = "in-progress";
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }, []);

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id && task.status !== "missed"
        ? { ...task, status: "completed" }
        : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const editTask = (task) => {
    if (task.status !== "missed") {
      setIsEditing(true);
      setCurrentTask(task);
    }
  };

  const handleUpdate = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === currentTask.id ? currentTask : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setIsEditing(false);
    setCurrentTask({ id: null, title: "", description: "", dueDate: "", status: "in-progress" });
  };

  return (
    <div className="main-container">
      <div className="todo-container">
        <h1 className="todo-heading">My Tasks</h1>
        <button className="add-task-btn" onClick={() => navigate("/ToDoList")}>
          + Add New Task
        </button>
        <div className="task-list">
          {tasks.length === 0 ? (
            <p>No tasks added yet!</p>
          ) : (
            tasks.map((task) => (
              <div className="task-item" key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                {task.dueDate && <p>Due Date: {task.dueDate}</p>}
                <p className={`task-status ${task.status}`}>Status: {task.status}</p>
                
                <div>
                {task.status !== "missed" && (
                  <button className="complete-btn" onClick={() => completeTask(task.id)}>
                    Mark as Complete
                  </button>
                )}
                {task.status !== "missed" && (
                  <button className="edit-btn" onClick={() => editTask(task)}>
                    Edit
                  </button>
                )}
                <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
                </div>
              </div>
            ))
          )}
        </div>

        {isEditing && (
          <div className="edit-task-container">
            <h2>Edit Task</h2>
            <input
              type="text"
              value={currentTask.title}
              onChange={(e) => setCurrentTask({ ...currentTask, title: e.target.value })}
              placeholder="Edit Task Title"
            />
            <textarea
              value={currentTask.description}
              onChange={(e) => setCurrentTask({ ...currentTask, description: e.target.value })}
              placeholder="Edit Task Description"
            ></textarea>
            <input
              type="date"
              value={currentTask.dueDate}
              onChange={(e) => setCurrentTask({ ...currentTask, dueDate: e.target.value })}
            />
            <button className="update-task-btn" onClick={handleUpdate}>
              Update Task
            </button>
            <button className="cancel-btn" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
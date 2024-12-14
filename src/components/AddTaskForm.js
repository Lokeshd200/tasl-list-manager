import React, { useState } from "react";

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({
      id: Date.now(),
      title,
      description,
      status,
    });
    setTitle("");
    setDescription("");
    setStatus("To Do");
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>To Do</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;

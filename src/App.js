import React, { useState, useEffect } from "react";
import TaskTable from "./components/TaskTable";
import AddTaskForm from "./components/AddTaskForm";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import { fetchTasks } from "./services/api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch initial task data from the placeholder API
  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);
      setFilteredTasks(data);
    };
    loadTasks();
  }, []);

  // Filter tasks based on status and search query
  useEffect(() => {
    let filtered = tasks;

    if (statusFilter) {
      filtered = tasks.filter((task) => task.status === statusFilter);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (task) =>
          task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredTasks(filtered);
  }, [statusFilter, searchQuery, tasks]);

  // Add a new task
  const addTask = (newTask) => {
    setTasks([newTask, ...tasks]);
    toast.success("Task added successfully!");
  };

  // Update tasks (for inline editing and deletion)
  const updateTasks = (updatedTasks) => {
    setTasks(updatedTasks);
    toast.success("Task updated successfully!");
  };

  return (
    <div className="App">
      <header>
        <h1 className="title">Task Manager</h1>
      </header>
      <div className="controls">
        <AddTaskForm onAddTask={addTask} />
        <FilterBar statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <TaskTable tasks={filteredTasks} setTasks={updateTasks} />
      <ToastContainer />
    </div>
  );
}

export default App;
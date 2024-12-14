import React from "react";
import { ReactTabulator } from "react-tabulator";
import { toast } from "react-toastify";
import "react-tabulator/lib/styles.css";
import "react-tabulator/lib/css/tabulator.min.css";


const TaskTable = ({ tasks, setTasks }) => {
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.success("Task deleted successfully!");
  };

  const columns = [
    { title: "Task ID", field: "id", editor: false },
    { title: "Title", field: "title", editor: "input" },
    { title: "Description", field: "description", editor: "textarea" },
    {
      title: "Status",
      field: "status",
      editor: "select",
      editorParams: { values: ["To Do", "In Progress", "Done"] },
    },
    {
      title: "Actions",
      formatter: "buttonCross",
      width: 100,
      cellClick: (e, cell) => deleteTask(cell.getData().id),
    },
  ];

  return (
    <ReactTabulator data={tasks} columns={columns} layout="fitData" />
  );
};

export default TaskTable;
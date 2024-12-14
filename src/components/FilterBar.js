import React from "react";

const FilterBar = ({ statusFilter, setStatusFilter }) => {
  return (
    <select
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
    >
      <option value="">All</option>
      <option value="To Do">To Do</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>
  );
};

export default FilterBar;
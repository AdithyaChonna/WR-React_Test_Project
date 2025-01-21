// src/App.tsx

import React, { useState } from 'react';
import TaskList from './components/TaskList';
import './components/TaskList.css'; 

// Define the Task type
type Task = {
  id: number;
  title: string;
  status: 'Pending' | 'Completed';
  priority: 'Low' | 'Medium' | 'High';
};

const App = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Pending' | 'Completed'>('All');
  
  const [tasks] = useState<Task[]>([
    { id: 1, title: 'Project A1', status: 'Pending', priority: 'High' },
    { id: 2, title: 'Project A2', status: 'Pending', priority: 'Medium' },
    { id: 3, title: 'Project A3', status: 'Completed', priority: 'Medium' },
    { id: 4, title: 'Project A4', status: 'Completed', priority: 'Low' },
  ]);

  const filteredTasks = tasks
    .filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))
    .filter((task) => statusFilter === 'All' || task.status === statusFilter);

  return (
    <div>
      <h1>My Task Dashboard</h1>
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as 'All' | 'Pending' | 'Completed')}>
        <option value="All">All Status</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default App;





import React from 'react';
import './TaskList.css'; 

type Task = {
  id: number;
  title: string;
  status: 'Pending' | 'Completed';
  priority: 'Low' | 'Medium' | 'High';
};

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div>
      <h2>Task List</h2>
      <table>
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Task Title</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.status}</td>
              <td>{task.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;


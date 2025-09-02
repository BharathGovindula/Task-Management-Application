import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, onToggleStatus, onEdit, onDelete, isGridView }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">
          <span className="material-icons">assignment</span>
        </div>
        <h3>No tasks found</h3>
        <p>Add a new task to get started</p>
      </div>
    );
  }

  return (
    <div className={isGridView 
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" 
      : "flex flex-col gap-4"
    }>
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleStatus={onToggleStatus}
          onEdit={onEdit}
          onDelete={onDelete}
          isGridView={isGridView}
        />
      ))}
    </div>
  );
};

export default TaskList;
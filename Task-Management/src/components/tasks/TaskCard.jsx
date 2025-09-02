import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const TaskCard = ({ task, onToggleStatus, onEdit, onDelete, isGridView }) => {
  const { id, title, description, dueDate, status } = task;
  
  const formattedDate = dueDate ? formatDistanceToNow(new Date(dueDate), { addSuffix: true }) : 'No due date';
  
  return (
    <div className={`task-card ${isGridView ? '' : 'flex-row'}`}>
      <div className={isGridView ? '' : 'flex-1'}>
        <div className="flex justify-between items-start mb-2">
          <h3>{title}</h3>
          <span className={`status ${status}`}>
            {status === 'completed' ? 'Completed' : 'Pending'}
          </span>
        </div>
        
        <p className="description">{description}</p>
        
        <div className="meta">
          <span className="material-icons">event</span>
          {formattedDate}
        </div>
      </div>
      
      <div className="task-actions">
        <button 
          onClick={() => onToggleStatus(id, status)}
          className={`toggle ${status}`}
          title={status === 'completed' ? 'Mark as Pending' : 'Mark as Completed'}
        >
          <span className="material-icons">
            {status === 'completed' ? 'replay' : 'check'}
          </span>
        </button>
        
        <button 
          onClick={() => onEdit(task)}
          className="edit"
          title="Edit Task"
        >
          <span className="material-icons">edit</span>
        </button>
        
        <button 
          onClick={() => onDelete(id)}
          className="delete"
          title="Delete Task"
        >
          <span className="material-icons">delete</span>
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
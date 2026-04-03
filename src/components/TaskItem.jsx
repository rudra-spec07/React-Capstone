import React from 'react';
import { Check, Trash2 } from 'lucide-react';

const TaskItem = React.memo(({ task, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between p-4 mb-2 border rounded shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: 'var(--text-color)' }}>
      <div className="flex items-center gap-3">
        <button 
          onClick={() => onToggle(task.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            task.completed ? 'bg-green-500 border-green-500' : 'border-gray-400'
          }`}
        >
          {task.completed && <Check size={14} className="text-white" />}
        </button>
        <span className={`${task.completed ? 'line-through opacity-50' : ''}`}>
          {task.title}
        </span>
      </div>
      <button 
        onClick={() => onDelete(task.id)}
        className="p-2 text-red-500 hover:bg-red-500 hover:text-white rounded transition-colors"
      >
        <Trash2 size={18} />
      </button>
    </li>
  );
});

export default TaskItem;
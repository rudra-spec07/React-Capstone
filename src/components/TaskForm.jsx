import { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        id="task-input"        // <-- Add this
        name="taskInput"       // <-- Add this
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 p-3 rounded border bg-transparent outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        style={{ borderColor: 'var(--text-color)' }}
      />
      <button 
        type="submit"
        className="px-6 py-3 font-bold rounded text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{ backgroundColor: 'var(--primary-color)' }}
      >
        Add
      </button>
    </form>
  );
}
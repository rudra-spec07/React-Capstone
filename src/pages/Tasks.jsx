import TaskList from '../components/TaskList';
import { useReducer, useEffect, useMemo, useCallback, useContext } from 'react';
import { taskReducer } from '../reducers/taskReducer';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ThemeContext } from '../context/ThemeContext';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import HackerBackground from '../components/HackerBackground';

export default function Tasks() {
  const { theme } = useContext(ThemeContext);
  const [savedTasks, setSavedTasks] = useLocalStorage('app-tasks', []);
  const [tasks, dispatch] = useReducer(taskReducer, savedTasks);
  const [filter, setFilter] = useLocalStorage('task-filter', 'all');

  // Sync state to localStorage
  useEffect(() => {
    setSavedTasks(tasks);
  }, [tasks, setSavedTasks]);

  // Performance: useCallback so we don't recreate functions on every render
  const handleAdd = useCallback((title) => dispatch({ type: 'ADD_TASK', payload: title }), []);
  const handleToggle = useCallback((id) => dispatch({ type: 'TOGGLE_TASK', payload: id }), []);
  const handleDelete = useCallback((id) => dispatch({ type: 'DELETE_TASK', payload: id }), []);

  // Performance: useMemo to prevent recalculating filtered arrays on unrelated renders
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'active': return tasks.filter(t => !t.completed);
      case 'completed': return tasks.filter(t => t.completed);
      default: return tasks;
    }
  }, [tasks, filter]);

  const taskStats = useMemo(() => ({
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length
  }), [tasks]);

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      {theme === 'hacker' && <HackerBackground />}
      
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Your Dashboard</h2>
          <p className="opacity-75">
            {taskStats.completed} / {taskStats.total} tasks completed
          </p>
        </div>
      </div>

      <TaskForm onAdd={handleAdd} />

      <div className="flex gap-2 mb-6">
        {['all', 'active', 'completed'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1 rounded capitalize border transition-colors ${
              filter === f ? 'bg-opacity-20 font-bold' : 'opacity-60 border-transparent'
            }`}
            style={{ 
              borderColor: filter === f ? 'var(--primary-color)' : 'transparent',
              color: filter === f ? 'var(--primary-color)' : 'inherit'
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <TaskList tasks={filteredTasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}
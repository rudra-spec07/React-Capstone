import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Sun, Sunset, TerminalSquare } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  const modes = [
    { id: 'light', icon: Sun, label: 'Light' },
    { id: 'sunset', icon: Sunset, label: 'Sunset' },
    { id: 'hacker', icon: TerminalSquare, label: 'Hacker' }
  ];

  return (
    <div className="flex gap-2 p-1 border rounded-lg max-w-fit" style={{ borderColor: 'var(--text-color)' }}>
      {modes.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => setTheme(id)}
          className={`p-2 rounded flex items-center gap-2 transition-all ${
            theme === id ? 'bg-opacity-20 bg-gray-500 font-bold' : 'opacity-50 hover:opacity-100'
          }`}
          style={{ color: theme === id ? 'var(--primary-color)' : 'inherit' }}
        >
          <Icon size={18} />
          <span className="hidden sm:inline text-sm">{label}</span>
        </button>
      ))}
    </div>
  );
}
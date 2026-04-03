import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import HackerBackground from '../components/HackerBackground';

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      {theme === 'hacker' && <HackerBackground />}
      <h1 className="text-5xl font-extrabold mb-6" style={{ color: 'var(--primary-color)' }}>
        ProTasker
      </h1>
      <p className="text-xl max-w-2xl mb-8 opacity-80">
        A high-performance, fully optimized React task manager. Built with context, reducers, and heavy memoization for seamless productivity.
      </p>
      <Link 
        to="/tasks" 
        className="px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl hover:-translate-y-1 transition-all"
        style={{ backgroundColor: 'var(--primary-color)' }}
      >
        Launch Dashboard
      </Link>
    </div>
  );
}
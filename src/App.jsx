import { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import { Loader } from 'lucide-react';

// Code Splitting / Lazy Loading
const Home = lazy(() => import('./pages/Home'));
const Tasks = lazy(() => import('./pages/Tasks'));

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen relative z-10 transition-colors duration-300">
          <nav className="p-4 flex justify-between items-center border-b" style={{ borderColor: 'var(--text-color)' }}>
            <Link to="/" className="font-bold text-xl tracking-wider">
              Pro<span style={{ color: 'var(--primary-color)' }}>Tasker</span>
            </Link>
            <ThemeToggle />
          </nav>

          <main className="container mx-auto">
            <Suspense fallback={
              <div className="flex h-[50vh] items-center justify-center">
                <Loader className="animate-spin" size={48} style={{ color: 'var(--primary-color)' }} />
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<Tasks />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}
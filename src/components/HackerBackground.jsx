import React, { useMemo } from 'react';
import { Terminal, Code, Cpu, Database, Binary } from 'lucide-react';

const icons = [Terminal, Code, Cpu, Database, Binary];

export default function HackerBackground() {
  const floatingElements = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => {
      const Icon = icons[Math.floor(Math.random() * icons.length)];
      const size = Math.random() * 40 + 20;
      const left = Math.random() * 100;
      const duration = Math.random() * 10 + 10; // 10s to 20s
      const delay = Math.random() * 10;

      return (
        <div
          key={i}
          className="hacker-icon"
          style={{
            left: `${left}vw`,
            width: size,
            height: size,
            animationDuration: `${duration}s`,
            animationDelay: `-${delay}s`
          }}
        >
          <Icon size={size} />
        </div>
      );
    });
  }, []);

  return <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">{floatingElements}</div>;
}
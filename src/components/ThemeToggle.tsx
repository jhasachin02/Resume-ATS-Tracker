import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span
        className={`absolute left-1 inline-block w-4 h-4 bg-white dark:bg-gray-300 rounded-full shadow transform transition-transform duration-200 ${
          isDark ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
      <Sun className={`absolute left-1.5 w-3 h-3 text-yellow-500 transition-opacity duration-200 ${isDark ? 'opacity-0' : 'opacity-100'}`} />
      <Moon className={`absolute right-1.5 w-3 h-3 text-blue-400 transition-opacity duration-200 ${isDark ? 'opacity-100' : 'opacity-0'}`} />
    </button>
  );
}
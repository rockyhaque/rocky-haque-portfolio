"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ThemeContextProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [mounted, setMounted] = useState(false); // New state to track if the component has mounted

  useEffect(() => {
    // Ensure the component is only rendered after it has mounted on the client
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setDarkMode(savedTheme === 'dark');
      }
    }
  }, [mounted]);

  useEffect(() => {
    if (mounted) {
      const root = window.document.documentElement;
      const theme = darkMode ? 'dark' : 'light';
      root.classList.remove(darkMode ? 'light' : 'dark');
      root.classList.add(theme);
      localStorage.setItem('theme', theme);
    }
  }, [darkMode, mounted]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Prevent rendering on the server to avoid hydration mismatches
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

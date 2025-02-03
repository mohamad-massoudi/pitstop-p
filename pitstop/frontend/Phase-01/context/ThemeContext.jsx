'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // ذخیره و بازیابی تم از Local Storage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      // تغییر کلاس‌های HTML بر اساس تم ذخیره‌شده
      document.documentElement.classList.add(storedTheme); // اعمال تم در HTML
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    // تغییر کلاس‌ها برای HTML
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme); // تغییر تم در HTML
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

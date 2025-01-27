'use client';

import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context/ThemeContext';

export default function Home() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
      <header className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">{t('welcome')}</h1>
        <div className="space-x-4">
          <button
            onClick={toggleTheme}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
          <select
            onChange={changeLanguage}
            value={i18n.language}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            <option value="en">English</option>
            <option value="fa">فارسی</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </header>
      <main className="p-6">
        <p>{t('description')}</p>
      </main>
    </div>
  );
}

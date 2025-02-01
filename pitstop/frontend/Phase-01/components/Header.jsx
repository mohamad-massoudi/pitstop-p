'use client';

import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button'; // دکمه از ShadCN
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'; // کامپوننت انتخاب زبان

const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const changeLanguage = (value) => {
    i18n.changeLanguage(value);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 shadow-md">
      {/* سمت چپ */}
      <h1 className="text-2xl font-bold text-blue-500">Pitstop</h1>

      {/* سمت راست */}
      <div className="flex space-x-4">
        <Button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          variant="default"
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Button>
        <Select onValueChange={changeLanguage} value={i18n.language}>
          <SelectTrigger>
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="fa">فارسی</SelectItem>
            <SelectItem value="ar">العربية</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </header>
  );
};

export default Header;

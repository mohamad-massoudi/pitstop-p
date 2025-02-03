'use client';

import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button"; // دکمه از ShadCN
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"; // کامپوننت انتخاب زبان

const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const changeLanguage = (value) => {
    i18n.changeLanguage(value);
  };

  return (
    <header className="flex justify-between items-center px-4 py-6 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      {/* سمت چپ */}
      <h1
        className={`text-2xl font-bold transition-all duration-500 ${
          theme === "light" ? "text-black" : "text-white"
        } text-center w-full`}
      >
        Pitstop
      </h1>

      {/* سمت راست */}
      <div className="flex space-x-4 items-center">
        {/* دکمه تغییر تم */}
        <Button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          variant="default"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </Button>

        {/* انتخاب زبان */}
        <Select onValueChange={changeLanguage} value={i18n.language}>
          <SelectTrigger className="bg-gray-100 p-2 rounded-md dark:bg-gray-800 dark:text-white">
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-gray-800 text-black dark:text-white">
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

"use client";

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
      <div className="flex space-x-4 items-center">
        {/* دکمه لاگین */}
        <Button
          aria-label="Login"
          variant="default"
          className={`transition-all duration-300 ${
            theme === "light" ? "bg-black text-white" : "bg-white text-black"
          } hover:bg-cyan-500 dark:hover:bg-slate-400 w-24 py-3 text-lg`} // افزایش اندازه دکمه
          onClick={() => console.log("Login clicked")}
        >
          {t("login")}
        </Button>
      </div>

      {/* وسط: لینک با تصویر و متن */}
      <a
        href="/"
        className={`flex flex-col items-center text-2xl font-bold transition-all duration-500 text-center w-full m-0 ${
          theme === "light" ? "text-black" : "text-white"
        } hover:text-cyan-500`} // هاور به رنگ هاور دکمه
      >
        {/* متن لوگو */}
        Pitstop
      </a>

      {/* سمت راست */}
      <div className="flex space-x-4 items-center">
        {/* دکمه تغییر تم */}
        <Button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          variant="default"
          className={`transition-all duration-300 ${
            theme === "light" ? "bg-black text-white" : "bg-white text-black"
          } hover:bg-zinc-500 dark:hover:bg-slate-400 py-3 px-4 text-base`}
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </Button>

        {/* انتخاب زبان */}
        <Select onValueChange={changeLanguage} value={i18n.language}>
          <SelectTrigger className="bg-gray-100 p-2 rounded-md dark:bg-gray-800 dark:text-white text-base font-bold">
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

"use client";

import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import TranslationProvider from "../context/TranslationProvider";
import Header from "../components/Header"; // ایمپورت هدر
import CustomSidebar from "@/components/CustomSidebar"; // ایمپورت کامپوننت سایدبار
import { useTranslation } from "react-i18next"; // برای دسترسی به زبان انتخاب‌شده
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const { i18n } = useTranslation();
  const [dir, setDir] = useState("ltr"); // وضعیت برای تعیین جهت صفحه

  useEffect(() => {
    if (i18n.language === "fa" || i18n.language === "ar") {
      setDir("rtl"); // برای زبان‌های فارسی و عربی
    } else {
      setDir("ltr"); // برای زبان‌های دیگر
    }
  }, [i18n.language]);

  return (
    <html lang={i18n.language}>
      <body className={`dark:bg-gray-900`}>
        <ThemeProvider>
          <TranslationProvider>
            {/* هدر ثابت می‌ماند و جهت آن تغییر نمی‌کند */}
            <Header />

            <div className={`flex ${dir === "rtl" ? "rtl" : "ltr"}`}>
              {/* اضافه کردن سایدبار به لایوت */}
              <CustomSidebar />

              <div className="flex-1 p-6">
                {children} {/* محتوای صفحه که تغییر جهت می‌دهد */}
              </div>
            </div>
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

'use client';

import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import TranslationProvider from '../context/TranslationProvider';
import Header from '../components/Header';  // ایمپورت هدر
import { useTranslation } from 'react-i18next'; // برای دسترسی به زبان انتخاب‌شده
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  const { i18n } = useTranslation();
  const [dir, setDir] = useState('ltr'); // وضعیت برای تعیین جهت صفحه

  useEffect(() => {
    if (i18n.language === 'fa' || i18n.language === 'ar') {
      setDir('rtl'); // برای زبان‌های فارسی و عربی
    } else {
      setDir('ltr'); // برای زبان‌های دیگر
    }
  }, [i18n.language]);

  return (
    <html lang={i18n.language}>
      <body className={`dark:bg-gray-950`}>
        <ThemeProvider>
          <TranslationProvider>
            <Header /> {/* هدر ثابت می‌ماند و جهت آن تغییر نمی‌کند */}
            <div className={`min-h-screen ${dir === 'rtl' ? 'rtl' : 'ltr'}`}>
              {children} {/* محتوای صفحه که تغییر جهت می‌دهد */}
            </div>
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

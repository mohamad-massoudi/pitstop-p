// app/layout.tsx
export const metadata = {
  title: 'Next.js Multi-Language App',
  description: 'A multi-language app with dark mode',
};

// بدون 'use client' در لایه ریشه

import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import TranslationProvider from '../context/TranslationProvider';
import Header from '../components/Header';  // ایمپورت هدر
import LanguageWrapper from '../components/LanguageWrapper'; // ایمپورت کامپوننت LanguageWrapper

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-950">
        <ThemeProvider>
          <TranslationProvider>
            <LanguageWrapper>
              <Header /> {/* هدر رو اینجا قرار می‌دهیم */}
              {children}
            </LanguageWrapper>
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

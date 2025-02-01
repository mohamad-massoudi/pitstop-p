'use client';

import { useTranslation } from 'react-i18next'; // ایمپورت پرووایدری که برای زبان استفاده می‌کنی
import Header from '../components/Header'; // ایمپورت کامپوننت هدر

export default function Home() {
  const { t } = useTranslation(); // استفاده از hook برای ترجمه

  return (
    <div className="min-h-screen">
      <Header /> {/* استفاده از کامپوننت هدر */}
      <main className="p-6">
        <p>{t('description')}</p>
      </main>
    </div>
  );
}

'use client';  // برای اطمینان از اینکه این کامپوننت در کلاینت رندر می‌شود

import { useTranslation } from 'react-i18next'; // برای ترجمه
import { useEffect } from 'react';

export default function Home() {
  const { t } = useTranslation(); // استفاده از hook برای ترجمه

  return (
    <div className="min-h-screen">
      <main className="p-6">
        <p>{t('description')}</p>
      </main>
    </div>
  );
}

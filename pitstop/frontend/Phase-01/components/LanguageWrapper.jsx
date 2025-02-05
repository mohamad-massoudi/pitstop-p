'use client';

import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function LanguageWrapper({ children }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // تغییر جهت محتوای صفحه بر اساس زبان انتخاب‌شده
    const body = document.querySelector('body');
    if (i18n.language === 'fa' || i18n.language === 'ar') {
      body?.setAttribute('dir', 'rtl'); // راست‌چین برای فارسی و عربی
    } else {
      body?.setAttribute('dir', 'ltr'); // چپ‌چین برای سایر زبان‌ها
    }
  }, [i18n.language]);

  return <div>{children}</div>; // فقط محتوای داخلی تغییر جهت می‌دهد
}

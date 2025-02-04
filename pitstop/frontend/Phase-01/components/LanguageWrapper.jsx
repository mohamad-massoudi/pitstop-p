// components/LanguageWrapper.tsx
'use client';

import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function LanguageWrapper({ children }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // تغییر جهت صفحه بر اساس زبان انتخاب‌شده
    if (i18n.language === 'fa' || i18n.language === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl'); // راست‌چین برای فارسی و عربی
    } else {
      document.documentElement.setAttribute('dir', 'ltr'); // چپ‌چین برای سایر زبان‌ها
    }
  }, [i18n.language]);

  return <>{children}</>; // نمایش محتوای داخلی
}

'use client';

import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function LanguageDirection() {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'fa' || i18n.language === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return null;
}

export default LanguageDirection;

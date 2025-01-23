import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          welcome: 'Welcome',
          description: 'This is a multi-language Next.js app.',
          select_language: 'Select Language',
        },
      },
      fa: {
        translation: {
          welcome: 'خوش آمدید',
          description: 'این یک اپلیکیشن چندزبانه با Next.js است.',
          select_language: 'انتخاب زبان',
        },
      },
      ar: {
        translation: {
          welcome: 'مرحباً',
          description: 'هذا تطبيق متعدد اللغات باستخدام Next.js.',
          select_language: 'اختر اللغة',
        },
      },
    },
  });

export default i18n;

// app/page.tsx
'use client'; // استفاده از 'use client' در ابتدای فایل

import Home from '../components/Home'; // ایمپورت کامپوننت Home

export default function Page() {
  return (
    <div>
      <Home /> {/* کامپوننت Home برای محتوای صفحه */}
    </div>
  );
}

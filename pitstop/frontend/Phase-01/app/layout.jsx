import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import TranslationProvider from '../context/TranslationProvider';
import Header from '../components/Header';  // ایمپورت هدر

export const metadata = {
  title: 'Next.js Multi-Language App',
  description: 'A multi-language app with dark mode',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <TranslationProvider>
            <Header /> {/* هدر رو اینجا قرار می‌دهیم */}
            {children}
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

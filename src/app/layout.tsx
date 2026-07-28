import type { Metadata } from 'next';
import { Cinzel, Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { PageTransition } from '@/components/PageTransition';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '600', '700', '900'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sophia & Alexander · Our Wedding',
  description: 'Join us as we celebrate our love — September 20, 2025 in Tuscany, Italy.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ background: 'var(--background)' }}
      >
        <Navigation />
        <PageTransition>
          <main className="flex-1">{children}</main>
        </PageTransition>
      </body>
    </html>
  );
}

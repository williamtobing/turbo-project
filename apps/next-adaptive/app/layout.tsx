import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { palette } from '@/theme.config';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-plus-jakarta-sans',
});

export const metadata: Metadata = {
  title: 'William Suarez Lumbantobing',
  description: `Hi! This is William's website. William is a technology enthusiast who always wants to know many things about technological developments. Visit if you want to know more.`,
  keywords:
    'Portfolio, William, Suarez, Tech, Programming, Javascript, Typescript, React, Next, Vue, Laravel, Developer, Fullstack, Software',
  authors: [
    { name: 'William Suarez Lumbantobing', url: 'https://williamtobing.com/' },
  ],
  themeColor: palette.daisyBush,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} font-sans`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}

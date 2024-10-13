import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Camp Nakamoto',
  description: 'A Bitcoin Weekend Getaway On New Hampshire\'s Largest Lake',
};

const cabin = 'family=Cabin:ital,wght@0,400..700;1,400..700';
const fredoka = 'family=Fredoka:wght@300..700';
const luckiestGuy = 'family=Luckiest+Guy';
const vollkornSC = 'family=Vollkorn+SC:wght@400;600;700;900';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      {/* Optional: for older browsers */}
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link
          href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Fredoka:wght@300..700&family=Luckiest+Guy&family=Vollkorn+SC:wght@400;600;700;900&display=swap"
          rel="stylesheet"/>
    </head>
    <body className={`${inter.className} site-wrapper`}>
    <Navbar/>
    <main className="pt-16">
      {children}
    </main>
    </body>
    </html>
  );
}

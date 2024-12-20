import React from "react";
import {GoogleAnalytics} from '@next/third-parties/google';
import '../styles/index.scss';
import type {Metadata} from 'next';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

export const metadata: Metadata = {
  title: 'Camp Nakamoto',
  description: 'A Bitcoin Weekend Getaway On New Hampshire\'s Largest Lake',
};

export default function RootLayout({children}: { children: React.ReactNode; }) {
  return (
      <html lang="en">
      <head>
        <title>Camp Nakamoto</title>
        <meta name="description"
              content="An Island Bitcoin Retreat - Disconnect from the digital noise and reconnect with nature. Here, every byte of data and bite of food is served with a view of one of New Hampshire's most beautiful lakes."/>
        <meta property="og:title" content="Camp Nakamoto"/>
        <meta property="og:description"
              content="At Camp Nakamoto, get ready to disconnect from the digital noise and reconnect with nature, while still diving deep into the world of bitcoin and its remnant community. Here, every byte of data and bite of food is served with a view of one of New Hampshire's most beautiful lakes. Since 1899, Sandy Island has been the backdrop for extraordinary experiences, spread across 66 wooded acres in the heart of Lake Winnipesaukee, New Hampshire. Whether your family is by blood or by bitcoin's blockchain, Sandy Island is the perfect place for you and yours to grow in spirit, body, and mind amidst nature's splendor."/>
        <meta property="og:image" content="https://www.campnakamoto.com/images/camp-nakamoto-badge.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
            href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Fredoka:wght@300..700&family=Luckiest+Guy&family=Vollkorn+SC:wght@400;600;700;900&display=swap"
            rel="stylesheet"/>
      </head>
      <body className="site-wrapper">
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <Navbar/>
      <main className="pt-16">
        {children}
      </main>
      <Footer/>
      </body>
      <GoogleAnalytics gaId="G-NBC94XV74K"/>
      <script async src="https://eocampaign1.com/form/4f05de42-9a31-11ef-94c4-432dbbbbc6f0.js"
              data-form="4f05de42-9a31-11ef-94c4-432dbbbbc6f0"></script>
      </html>
  );
}

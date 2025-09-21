import React, { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Karaoke | Camp Nakamoto',
  description: 'Sing your heart out at Camp Nakamoto karaoke night.',
};

export default function KaraokeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-screen p-0 m-0">
      {children}
    </div>
  );
}

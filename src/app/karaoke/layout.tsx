import React, { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';

import './_index.scss';

export const metadata: Metadata = {
  title: 'Karaoke | Camp Nakamoto',
  description: 'Sing your heart out at Camp Nakamoto karaoke night.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function KaraokeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="karaoke-root min-h-screen w-screen p-0 m-0">
      {children}
    </div>
  );
}

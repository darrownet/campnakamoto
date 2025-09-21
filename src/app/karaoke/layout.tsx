import React, { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';

import './_index.scss';

// This layout wraps only the `/karaoke` route segment.
// It renders inside the RootLayout (<main>{children}</main>), so
// do NOT include <html> or <body> tags here.
export const metadata: Metadata = {
  title: 'Karaoke | Camp Nakamoto',
  description: 'Sing your heart out at Camp Nakamoto karaoke night.',
};

// Route-specific viewport meta tag
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

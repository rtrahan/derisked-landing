import React from 'react'
import Script from 'next/script'
import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from './components/ThemeProvider'
import ParticleNetwork from './components/ParticleNetwork'

export const metadata: Metadata = {
  title: 'DeRisked Digital Group | Web3 Holding Company',
  description: 'DeRisked Digital Group owns and operates a group of regulated companies as well as blockchain and trading infrastructure companies to power the world\'s on-chain digital asset future.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grain-overlay"></div>
          <ParticleNetwork />
          <div className="particles-container">
            {Array.from({ length: 15 }).map((_, index) => (
              <div key={index} className={`particle particle-${(index % 18) + 1}`}></div>
            ))}
          </div>
          {children}
        </ThemeProvider>
        <Script
          id="load-fontshare"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,600,500&f[]=general-sans@600,500,400,300&display=swap';
                document.head.appendChild(link);
              })();
            `
          }}
        />
      </body>
    </html>
  )
} 
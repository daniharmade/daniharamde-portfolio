import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { GoToTop } from '@/components/go-to-top';
import { Toaster } from '@/components/ui/toaster';
import { ScrollProgress } from '@/components/scroll-progress';
import Banner from '../public/bannerp.jpeg';
import { Analytics } from '@vercel/analytics/react';
import { ChatBot } from '@/components/chat-bot';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dani Harmade | Software Engineer',
  description:
    'Professional portfolio of Dani Harmade, a software engineer specializing in full-stack development',
  keywords: [
    'Taufik Pragusga',
    'software engineer',
    'full-stack developer',
    'web development',
    'portfolio',
  ],
  authors: [{ name: 'Taufik Pragusga' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pragusga.com',
    title: 'Taufik Pragusga | Software Engineer',
    description:
      'Professional portfolio of Taufik Pragusga, a software engineer specializing in full-stack development',
    siteName: 'Taufik Pragusga Portfolio',
    images: [
      {
        url: Banner.src,
        width: 1200,
        height: 630,
        alt: 'Taufik Pragusga - Software Engineer',
      },
    ],
    countryName: 'Indonesia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taufik Pragusga | Software Engineer',
    description:
      'Professional portfolio of Taufik Pragusga, a software engineer specializing in full-stack development',
    creator: '@pragusga',
    images: [
      {
        url: Banner.src,
        width: 1200,
        height: 630,
        alt: 'Taufik Pragusga - Software Engineer',
      },
    ],
  },
  viewport: 'width=device-width, initial-scale=1.0',
  abstract: 'Professional portfolio of Taufik Pragusga',
  applicationName: 'Taufik Pragusga Portfolio',
  category: 'Software Engineer',
  colorScheme: 'light dark',
  metadataBase: new URL('https://pragusga.com'),
  themeColor: '#ea580c',
  creator: 'Taufik Pragusga',
  alternates: {
    canonical: 'https://v0.pragusga.com',
  },
  publisher: 'Taufik Pragusga',
  referrer: 'no-referrer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          <Navbar />
          <ScrollProgress />
          <main>{children}</main>
          <Footer />
          <GoToTop />
          <ChatBot />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { GoToTop } from '@/components/go-to-top';
import { Toaster } from '@/components/ui/toaster';
import { ScrollProgress } from '@/components/scroll-progress';
import Banner from '../public/bannerp.png';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dani Harmade | Software Engineer',
  description:
    'Professional portfolio of Dani Harmade, a software engineer specializing in full-stack development',
  keywords: [
    'Dani Harmade',
    'software engineer',
    'full-stack developer',
    'web development',
    'android development',
    'portfolio',
  ],
  authors: [{ name: 'Dani Harmade' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://daniharmade.vercel.app/',
    title: 'Dani Harmade | Software Engineer',
    description:
      'Professional portfolio of Dani Harmade, a software engineer specializing in full-stack & android development',
    siteName: 'Dani Harmade Portfolio',
    images: [
      {
        url: Banner.src,
        width: 1200,
        height: 630,
        alt: 'Dani Harmade - Software Engineer',
      },
    ],
    countryName: 'Indonesia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dani Harmade | Software Engineer',
    description:
      'Professional portfolio of Dani Harmade, a software engineer specializing in full-stack  & android development',
    creator: '@daniharmade',
    images: [
      {
        url: Banner.src,
        width: 1200,
        height: 630,
        alt: 'Dani Harmade - Software Engineer',
      },
    ],
  },
  viewport: 'width=device-width, initial-scale=1.0',
  abstract: 'Professional portfolio of Dani Harmade',
  applicationName: 'Dani Harmade Portfolio',
  category: 'Software Engineer',
  colorScheme: 'light dark',
  metadataBase: new URL('https://daniharmade.vercel.app/'),
  themeColor: '#ea580c',
  creator: 'Dani Harmade',
  alternates: {
    canonical: 'https://daniharmade.vercel.app/',
  },
  publisher: 'Dani Harmade',
  referrer: 'no-referrer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#ea580c" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          <Navbar />
          <ScrollProgress />
          <main>{children}</main>
          <Footer />
          <GoToTop />

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}


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
  title: 'Dani Harmade | Software Engineer & Full-Stack Developer',
  description:
    'Portfolio resmi Dani Harmade, seorang Software Engineer dan Full-Stack Developer yang berpengalaman dalam pengembangan aplikasi web, mobile, dan sistem digital. Menampilkan proyek, pengalaman, keahlian, dan layanan profesional.',
  keywords: [
    'Dani Harmade',
    'Profil Dani Harmade',
    'Software Engineer Indonesia',
    'Full-Stack Developer Indonesia',
    'Web Developer',
    'Next.js Developer',
    'React Developer',
    'Android Developer',
    'Portfolio Software Engineer',
    'Portfolio Dani Harmade',
  ],
  authors: [{ name: 'Dani Harmade', url: 'https://daniharmade.vercel.app' }],
  creator: 'Dani Harmade',
  publisher: 'Dani Harmade',
  metadataBase: new URL('https://daniharmade.vercel.app/'),

  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://daniharmade.vercel.app/',
    title: 'Dani Harmade | Software Engineer & Full-Stack Developer',
    description:
      'Website resmi Dani Harmade, Software Engineer dan Full-Stack Developer dari Indonesia. Temukan pengalaman kerja, proyek terbaik, dan profil profesional lengkap.',
    siteName: 'Dani Harmade Portfolio',
    images: [
      {
        url: Banner.src,
        width: 1200,
        height: 630,
        alt: 'Portfolio Dani Harmade - Software Engineer',
      },
    ],
    countryName: 'Indonesia',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Dani Harmade | Software Engineer & Full-Stack Developer',
    description:
      'Portfolio profesional Dani Harmade, Software Engineer berpengalaman dalam pengembangan web, mobile, dan sistem digital.',
    creator: '@daniharmade',
    images: [Banner.src],
  },

  alternates: {
    canonical: 'https://daniharmade.vercel.app/',
    languages: {
      'id-ID': 'https://daniharmade.vercel.app/',
      'en-US': 'https://daniharmade.vercel.app/en',
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  category: 'Portfolio, Software Engineer',
  applicationName: 'Dani Harmade Portfolio',
  referrer: 'origin-when-cross-origin',
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: '#ea580c',
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

        {/* Google Search Console Verification */}
        <meta 
          name="google-site-verification" 
          content="oMBW8sY21uHuDn4vusv1mT002rKoSx8sAPnDxnLWrvs" 
        />
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



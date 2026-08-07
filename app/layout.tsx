import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lions Club Anakkara | We Serve',
  description: 'Discover Lions Club Anakkara, our community service activities, medical camps, events, humanitarian initiatives and commitment to serving society in District 318, Kerala.',
  keywords: ['Lions Club Anakkara', 'Lions Club', 'We Serve', 'Anakkara', 'Kerala Lions Club', 'Humanitarian Service', 'Medical Camps Anakkara', 'Blood Donation Kerala'],
  authors: [{ name: 'Lions Club Anakkara' }],
  openGraph: {
    title: 'Lions Club Anakkara | We Serve',
    description: 'Serving the community with compassion, leadership and dedication.',
    url: 'https://lionsclubanakkara.org',
    siteName: 'Lions Club Anakkara',
    images: [
      {
        url: '/images/hero/hero_bg.png',
        width: 1200,
        height: 630,
        alt: 'Lions Club Anakkara Community Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lions Club Anakkara | We Serve',
    description: 'Serving the community with compassion, leadership and dedication.',
    images: ['/images/hero/hero_bg.png'],
  },
  metadataBase: new URL('https://lionsclubanakkara.org'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col justify-between bg-[#F8FAFC] text-[#1E293B]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

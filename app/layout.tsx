import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pizza School - Premium Italian Pizza Delivery',
  description: 'Welcome to Pizza School, where every slice gets an A+. Handcrafted premium pizzas with fresh ingredients. Fast delivery in Cairo.',
  keywords: 'Pizza, Italian, Delivery, Cairo, Premium Pizza, Pizza School',
  openGraph: {
    title: 'Pizza School - Premium Pizza Delivery',
    description: 'Every slice gets an A+',
    type: 'website',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pizza School - Premium Pizza Delivery',
    description: 'Every slice gets an A+',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

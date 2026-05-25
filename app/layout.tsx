import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Pizza School | Premium Pizza Restaurant",

  description:
    "Premium handcrafted pizza with fast delivery and authentic Italian flavor.",

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "Pizza School",
    description:
      "Premium handcrafted pizza with fast delivery and authentic Italian flavor.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pizza School",
    description:
      "Premium handcrafted pizza with fast delivery and authentic Italian flavor.",
    images: ["/og-image.png"],
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

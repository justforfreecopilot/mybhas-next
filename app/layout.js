"use client";

import { useEffect, useState } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Loader from './Loader'; // Import the Loader component

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mybhas - Goan News',
  description: 'Mybhas - Goan News',
};

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {loading ? <Loader /> : children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { MonitorSmartphone } from 'lucide-react';
import Link from 'next/link';
import { Toaster } from '@/components/ui/sonner';
import { ClerkProvider } from '@clerk/nextjs';
import Auth from '@/components/Auth';
import ReactQueryProvider from '@/providers/ReactQuery';
import CartDropdown from '@/components/cart';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DG Shop',
  description: 'DG shop for Test',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  ads: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ReactQueryProvider>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <main className="flex flex-col justify-between min-h-screen ">
              <header className="fixed top-0 left-0 flex justify-between items-center bg-white px-20 w-full h-20 shadow-[0_4px_20px_rgba(0,0,0,0.08)] z-50">
                <div className="flex items-center gap-3">
                  <MonitorSmartphone />
                  <Link href="/" className="font-bold text-2xl">
                    DgShap
                  </Link>
                </div>
                <div className="flex  items-center justify-center gap-3">
                  <CartDropdown />
                  <Auth />
                </div>
              </header>

              <div className="px-20 mt-28">
                {children}
                <Toaster />
              </div>
              <footer className="bg-black w-full text-white flex items-center justify-center h-10 z-40">
                <p>© 2025 [Dgshop] | ساخته شده با عشق و کد 💻❤️</p>
              </footer>
            </main>
          </body>
        </html>
      </ReactQueryProvider>
    </ClerkProvider>
  );
}

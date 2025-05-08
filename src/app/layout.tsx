import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/header';
import "./globals.css";

export const metadata: Metadata = {
  title: 'Home - Calculadora CalcAtom',
  description: 'Calculadora CalcAtom - Uma calculadora simples e pratica para uso diário. Desenvolvida com Next.js e Tailwind CSS.',
  openGraph: {  
    title: 'Home - Calculadora CalcAtom',
    description: 'Calculadora CalcAtom - Uma calculadora simples e pratica para uso diário. Desenvolvida com Next.js e Tailwind CSS.',
    url: 'https://calcatom.vercel.app/',
    siteName: 'CalcAtom',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Calculadora CalcAtom - Uma calculadora simples e pratica para uso diário. Desenvolvida com Next.js e Tailwind CSS.',
      },
    ],
  }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

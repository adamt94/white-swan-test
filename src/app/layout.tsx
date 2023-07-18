import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "White Swan",
  description: "created by adam",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <UserProvider>
          <body className={inter.className + " surface"}>{children}</body>
      </UserProvider>
    </html>
  );
}

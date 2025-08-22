"use client"; // Must be client to wrap SessionProvider & ThemeProvider
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/context/ThemeContext"; // import ThemeProvider
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
        <SessionProvider>
          <ThemeProvider>
            <Navbar />
            <main className="min-h-screen p-6">{children}</main>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

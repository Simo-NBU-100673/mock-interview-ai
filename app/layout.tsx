import type {Metadata} from "next";
import {Mona_Sans} from "next/font/google";
import "./globals.css";
import React from "react";

const monaSans = Mona_Sans({
  variable: "--font-mona-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "AI-powered platform for preparing for mock interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

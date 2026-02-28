import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Update the metadata object here
export const metadata: Metadata = {
  title: "Chrysolite Fellowship",
  description: "Chrysolite Interdenominational Fellowship - Raising believers firm in faith.",
  verification: {
    google: "Vq1U423QHJRrMdneMcvGhJH4DvvC2I_jJleiIl85KlU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="Vq1U423QHJRrMdneMcvGhJH4DvvC2I_jJleiIl85KlU" />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
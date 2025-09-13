import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/tokens.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Treasure - Component Library",
  description: "A comprehensive collection of modern React components and UI elements",
  keywords: ["React", "Components", "UI", "Frontend", "TypeScript"],
  authors: [{ name: "Frontend Treasure Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

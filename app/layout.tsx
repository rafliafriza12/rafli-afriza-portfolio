import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppLayout from "@/layouts/Index";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafli Afriza Nugraha",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-[#888888] scrollbar-track-[#1E252D] font-inter`}
      >
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}

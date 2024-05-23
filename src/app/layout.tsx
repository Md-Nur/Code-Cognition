import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Drawer from "@/components/Drawer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code & Cognition",
  description:
    "Code & Cognition is service for software development, web development, graphic design, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Drawer>
          <Navbar />
          {children}
        </Drawer>
      </body>
    </html>
  );
}

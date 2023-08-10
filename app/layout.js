import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Code & Cognition",
  description:
    "Code & Cognition - Elevate Your Business with Expert Programming Solutions with Code & Cognition. We are a team of expert programmers who can help you with your next project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " railway bg-[#23232B] min-h-screen"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

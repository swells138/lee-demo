import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Lee's Concessions",
  description:
    "Professional Food Service, Catering & ServSafe Training in Ohio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans text-gray-900 flex min-h-screen flex-col`}
      >
        <Header />
        <main className="flex-1 bg-white/80 backdrop-blur-sm">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

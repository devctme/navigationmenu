import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/page";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Design by devCT",
  description: "power by sunvi (build this app only for beginers) ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-screen-2xl m-auto h-screen flex flex-col justify-between bg-white">
          <Navbar />
          {children}
          <Footer />
        </main>
        x
      </body>
    </html>
  );
}

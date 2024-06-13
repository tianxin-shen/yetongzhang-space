import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yetong Zhang's Portfolio",
  description: "to come...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 flex justify-center">
        <main className="w-4/5 min-w-fit max-w-screen-2xl bg-neutral-800 text-white">
          <Navbar />
          <div className=" border-x-2 border-neutral-800/50">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}

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
      <body className="flex flex-col w-100 g-[0.625rem] bg-zinc-900 flex justify-center">
        <main className="text-white">
          <Navbar />
          <div className="">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedLayout from "@/components/AnimatedLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matritwa - Empowering Mothers in Nepal",
  description: "A circular economy marketplace and support hub for new mothers in Nepal. Save money, earn income, and build community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <AnimatedLayout>
          <main className="min-h-screen">
            {children}
          </main>
        </AnimatedLayout>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  StarCanvas  from "@/components/main/StarBackground";
import { NavBar } from "@/components/main/NavBar";
import { Footer } from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LearnShphere",
  description: "Best online learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarCanvas/>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}

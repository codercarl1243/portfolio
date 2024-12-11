import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styling/style.css";
import { Nunito_Sans, Libre_Baskerville} from 'next/font/google'
import { SanityLive } from "./studio/live";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const sansSerifFont = Nunito_Sans({
  subsets: ['latin'],
  variable: "--font-main",
  weight: ["400", "700"],
  style: ["normal", "italic"]
});
const serifFont = Libre_Baskerville({
  subsets: ['latin'],
  variable: "--font-accent",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Coder Carl's website",
  description: "Projects and stuff by Coder Carl",  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sansSerifFont.variable} ${serifFont.variable} antialiased  bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
      >
        <Header />
        {children}
        <Footer />
        
        <SanityLive />
      </body>
    </html>
  );
}

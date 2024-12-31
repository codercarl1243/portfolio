import type { Metadata } from "next";
import "./styling/style.css";
import { Nunito_Sans, Libre_Baskerville } from 'next/font/google'
import { SanityLive } from "./studio/live";

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
        className={`${sansSerifFont.variable} ${serifFont.variable} antialiased`}
      >
        {children}
        <SanityLive />
      </body>
    </html>
  );
}

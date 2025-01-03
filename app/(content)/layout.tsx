import type { Metadata } from "next";
import "../styling/style.css";
import { Footer, Header } from "@/components";

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
    <div className="wrapper">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

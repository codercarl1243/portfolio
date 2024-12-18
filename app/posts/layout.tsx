import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrapper">
      <Header />
      <section>{children}</section>
      <Footer />
    </ div>
  );
}
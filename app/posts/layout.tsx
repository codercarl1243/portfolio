
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        <section>{children}</section>
      </main>
    </>
  );
}
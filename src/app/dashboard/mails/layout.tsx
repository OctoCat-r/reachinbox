"use client";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <main className="flex-1 overflow-hidden">{children}</main>
      </div>
    </>
  );
}

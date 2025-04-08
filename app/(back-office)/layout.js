"use client";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <Header />
      <main className="ml-50 min-h-screen w-full overflow-auto bg-slate-100">
        {children}
      </main>
    </div>
  );
}

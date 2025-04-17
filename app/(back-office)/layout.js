"use client";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <Header />
      <main className="mt-12 ml-52 w-full overflow-auto bg-blue-50">
        {children}
      </main>
    </div>
  );
}

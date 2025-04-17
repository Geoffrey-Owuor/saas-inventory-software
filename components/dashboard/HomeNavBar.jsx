"use client";
import { Building2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeNavBar() {
  const pathName = usePathname();
  const navLinks = [
    {
      title: "Dashboard",
      href: "/dashboard/home/dashboard-page",
    },
    {
      title: "Getting Started",
      href: "/dashboard/home/getting-started",
    },
    {
      title: "Recent Updates",
      href: "/dashboard/home/updates",
    },
    {
      title: "Announcements",
      href: "/dashboard/home/announcements",
    },
  ];
  return (
    <div className="header_background h-30 border-b border-slate-300 bg-white pr-2">
      <div className="flex space-x-3">
        <div className="mt-2 ml-2 flex h-14 w-14 items-center justify-center rounded-lg bg-slate-200">
          <Building2 />
        </div>
        <div className="mt-2 flex flex-col">
          <p className="font-semibold text-slate-700">
            Hello, Jeff Web Developer
          </p>
          <span className="text-sm">jeffcompany</span>
        </div>
      </div>
      <nav className="mt-5 ml-2 flex space-x-6">
        {navLinks.map((item, i) => {
          return (
            <Link
              key={i}
              href={item.href}
              className={`${pathName === item.href ? "border-b-2 border-slate-800 pb-0.5 text-blue-500" : "pb-0.5 text-slate-800"}`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

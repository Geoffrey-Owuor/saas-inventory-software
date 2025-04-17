import {
  FileBarChart,
  FolderOpen,
  HomeIcon,
  LucideLink,
  ShoppingBagIcon,
  ShoppingBasketIcon,
  SidebarCloseIcon,
  ShoppingCartIcon,
  TagIcon,
} from "lucide-react";

import Link from "next/link";
import SubscriptionCard from "./SubscriptionCard";
import SidebarDropDownLink from "./SidebarDropDownLink";

export default function Sidebar() {
  const inventoryLinks = [
    {
      title: "Items",
      href: "/dashboard/inventory",
    },
    {
      title: "Categories",
      href: "/dashboard/inventory/categories",
    },
    {
      title: "Brands",
      href: "/dashboard/inventory/brands",
    },
    {
      title: "Units",
      href: "/dashboard/inventory/units",
    },
    {
      title: "Warehouse",
      href: "/dashboard/inventory/warehouse",
    },
    {
      title: "Adjustments",
      href: "/dashboard/inventory/adjustments",
    },
  ];
  const salesLinks = [
    {
      title: "Customers",
      href: "",
    },
    {
      title: "Sales Orders",
      href: "",
    },
    {
      title: "Packages",
      href: "",
    },
    {
      title: "Shipments",
      href: "",
    },
    {
      title: "Invoices",
      href: "",
    },
    {
      title: "Sales Receipts",
      href: "",
    },
    {
      title: "Payments",
      href: "",
    },
    {
      title: "Sales Returns",
      href: "",
    },
    {
      title: "Credit Notes",
      href: "",
    },
  ];

  return (
    <div className="fixed flex h-screen w-52 flex-col bg-slate-800 text-slate-50">
      {/* Top Part */}
      <div className="mb-3 ml-3 flex flex-shrink-0 items-center space-x-2">
        <Link
          href="#"
          className="mt-0.5 flex items-center text-2xl font-semibold"
        >
          <ShoppingBasketIcon className="h-7 w-7" />
          <span>Inventory</span>
        </Link>
        <button className="mt-2 ml-2 cursor-pointer rounded-lg p-1 hover:bg-slate-700">
          <SidebarCloseIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex flex-col overflow-y-auto">
        {/* Links */}
        <nav className="flex flex-col gap-2 px-4 pb-4">
          <Link
            href="/dashboard/home/dashboard-page"
            className="-mx-2 flex items-center space-x-2 rounded-lg bg-slate-700 py-2 pl-2.5 transition-colors duration-200 hover:bg-slate-600"
          >
            <HomeIcon className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <SidebarDropDownLink
            title="Inventory"
            items={inventoryLinks}
            icon={TagIcon}
          />
          <SidebarDropDownLink
            title="Sales"
            items={salesLinks}
            icon={ShoppingCartIcon}
          />
          <SidebarDropDownLink
            title="Purchases"
            items={inventoryLinks}
            icon={ShoppingBagIcon}
          />

          <Link
            href=""
            className="-mx-2 mt-3 flex items-center space-x-2 rounded-lg py-2 pl-2.5 transition-colors duration-200 hover:bg-slate-700"
          >
            <LucideLink className="h-4 w-4" />
            <span>Integrations</span>
          </Link>
          <Link
            href=""
            className="-mx-2 mt-3 flex items-center space-x-2 rounded-lg py-2 pl-2.5 transition-colors duration-200 hover:bg-slate-700"
          >
            <FileBarChart className="h-4 w-4" />
            <span>Reports</span>
          </Link>
          <Link
            href=""
            className="-mx-2 mt-3 flex items-center space-x-2 rounded-lg py-2 pl-2.5 transition-colors duration-200 hover:bg-slate-700"
          >
            <FolderOpen className="h-4 w-4" />
            <span>Documents</span>
          </Link>
        </nav>

        {/* Bottom Part - will stick to bottom when content overflows */}
        <div className="mt-auto border-t border-slate-700 pt-4">
          <SubscriptionCard />
        </div>
      </div>
    </div>
  );
}

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
      title: "Item Groups",
      href: "/dashboard/inventory",
    },
    {
      title: "Adjustments",
      href: "",
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

  const InventoryChevronClassName = "ml-12.5";
  const SalesChevronClassName = "ml-20";
  const purchasesChevronClassName = "ml-11.5";

  return (
    <div className="fixed flex min-h-screen w-50 flex-col bg-slate-800 text-slate-50">
      {/* Top Part */}
      <div href="#" className="ml-3 flex items-center space-x-2">
        <Link
          href="#"
          className="mt-0.5 flex items-center text-2xl font-semibold"
        >
          <ShoppingBasketIcon className="h-7 w-7" />
          Inventory
        </Link>
        <button className="mt-2.5 ml-2 cursor-pointer rounded-lg p-1 hover:bg-slate-700">
          <SidebarCloseIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Links */}
      <nav className="mt-4.5 flex flex-col gap-2 px-4">
        <Link
          href="/dashboard/home/dashboard-page"
          className="-mx-2 flex items-center space-x-2 rounded-lg bg-slate-700 py-2 pl-2.5"
        >
          <HomeIcon className="h-4 w-4" />
          <span>Home</span>
        </Link>
        <SidebarDropDownLink
          title="Inventory"
          items={inventoryLinks}
          icon={TagIcon}
          chevronClassName={InventoryChevronClassName}
        />
        <SidebarDropDownLink
          title="Sales"
          items={salesLinks}
          icon={ShoppingCartIcon}
          chevronClassName={SalesChevronClassName}
        />
        <SidebarDropDownLink
          title="Purchases"
          items={inventoryLinks}
          icon={ShoppingBagIcon}
          chevronClassName={purchasesChevronClassName}
        />

        <Link
          href=""
          className="-mx-2 mt-3 flex items-center space-x-2 rounded-lg py-2 pl-2.5 hover:bg-slate-700"
        >
          <LucideLink className="h-4 w-4" />
          <span>Integrations</span>
        </Link>
        <Link
          href=""
          className="-mx-2 mt-3 flex items-center space-x-2 rounded-lg py-2 pl-2.5 hover:bg-slate-700"
        >
          <FileBarChart className="h-4 w-4" />
          <span>Reports</span>
        </Link>
        <Link
          href=""
          className="-mx-2 mt-3 flex items-center space-x-2 rounded-lg py-2 pl-2.5 hover:bg-slate-700"
        >
          <FolderOpen className="h-4 w-4" />
          <span>Documents</span>
        </Link>
      </nav>
      {/* Bottom Part */}
      <SubscriptionCard />
    </div>
  );
}

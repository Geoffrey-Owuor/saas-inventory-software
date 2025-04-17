import {
  Bell,
  ChevronDown,
  Grip,
  HistoryIcon,
  PlusIcon,
  Settings,
  Users2,
  ShoppingBasketIcon,
  SidebarCloseIcon,
} from "lucide-react";
import SearchInput from "./SearchInput";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed right-0 left-52 flex h-12 items-center justify-between border-b border-slate-300 bg-slate-100 px-2">
      <div className="flex">
        {/* Search */}
        <SearchInput />
      </div>

      <div className="flex items-center gap-3">
        {/* Recent Activities */}
        <button className="cursor-pointer rounded-full p-1 hover:bg-slate-200">
          <HistoryIcon className="mb-0.5 h-6 w-6" />
        </button>
        {/*  Plus Icon*/}
        <div className="pr-2">
          <button className="mr-1.5 cursor-pointer rounded-full bg-slate-400 p-1 hover:bg-slate-500">
            <PlusIcon className="h-4 w-4 text-slate-50" />
          </button>
        </div>
        {/*Users, Notifications, and Settings*/}
        <div className="flex space-x-2">
          <button className="cursor-pointer rounded-full p-1 hover:bg-slate-200">
            <Users2 className="h-4 w-4 text-slate-900" />
          </button>
          <button className="cursor-pointer rounded-full p-1 hover:bg-slate-200">
            <Bell className="h-4 w-4 text-slate-900" />
          </button>
          <button className="mr-1.5 cursor-pointer rounded-full p-1 hover:bg-slate-200">
            <Settings className="h-4 w-4 text-slate-900" />
          </button>
        </div>
        {/* Users, Organization*/}
        <div className="flex gap-3">
          <button className="flex items-center rounded-2xl p-1 hover:bg-slate-200">
            <span className="text-sm">Geoffrey</span>
            <ChevronDown className="mt-1 h-4 w-4" />
          </button>
          <button>
            <Image
              src="/user.png"
              alt="user image"
              width={90}
              height={90}
              className="h-8 w-8 rounded-full border border-slate-400 hover:border-2"
            />
          </button>
          <button className="cursor-pointer rounded-lg p-1 hover:bg-slate-200">
            <Grip className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

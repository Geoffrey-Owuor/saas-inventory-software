import {
  ChevronDownIcon,
  HelpCircle,
  LayoutGrid,
  List,
  MoreHorizontal,
  PlusIcon,
} from "lucide-react";
import Link from "next/link";

export default function FixedHeader({ newLink }) {
  return (
    <div className="mt-12 flex items-center justify-between bg-white px-3 py-4">
      <button className="flex items-center space-x-1 p-1">
        <span className="text-xl font-medium">All Items</span>
        <ChevronDownIcon className="mt-1 h-4 w-4 font-extrabold text-blue-500" />
      </button>
      <div className="flex gap-4">
        {/* New */}
        <div>
          <Link
            href={newLink}
            className="flex items-center space-x-1 rounded-sm bg-blue-500 px-2 py-1 text-white"
          >
            <PlusIcon className="h-4 w-4" />
            <span className="mb-0.5">New</span>
          </Link>
        </div>
        {/* Layout */}
        <div className="flex overflow-hidden rounded-md">
          <button className="border-r border-gray-400 bg-gray-300 p-2">
            <List className="h-4 w-4" />
          </button>
          <button className="bg-gray-100 p-2">
            <LayoutGrid className="h-4 w-4" />
          </button>
        </div>
        {/* More */}
        <button className="rounded-md bg-gray-200 p-2">
          <MoreHorizontal className="h-4 w-4" />
        </button>
        {/* Help Button */}
        <button className="rounded-xl p-1">
          <HelpCircle className="text-orange-300 hover:text-orange-400" />
        </button>
      </div>
    </div>
  );
}

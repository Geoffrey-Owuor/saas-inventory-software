import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";

export default function CollapsibleLink({ title, href }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between rounded-lg px-3 py-1.5 transition-all duration-300 hover:bg-slate-700"
    >
      <span className="mb-1 ml-3.5 text-sm">{title}</span>
      <PlusCircleIcon className="h-3.5 w-3.5" />
    </Link>
  );
}

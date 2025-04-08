import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function SalesActivityCard({ item }) {
  return (
    <>
      <Link
        href={item.href}
        className="flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-slate-200 bg-slate-100 px-2 py-4 transition-all duration-300 hover:border-blue-500"
      >
        <h4 className={` ${item.color} text-3xl font-semibold`}>
          {item.Number}
        </h4>
        <small className="text-slate-500">{item.Unit}</small>
        <div className="flex items-center space-x-2 text-slate-500">
          <CheckCircle2 className="h-4 w-4" />
          <span className="text-xs uppercase">{item.title}</span>
        </div>
      </Link>
    </>
  );
}

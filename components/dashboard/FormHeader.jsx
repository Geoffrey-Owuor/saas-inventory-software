import Link from "next/link";
import { XCircleIcon } from "lucide-react";

export default function FormHeader({ title, href }) {
  return (
    <div className="flex items-center justify-between bg-white p-3">
      {/* Header */}

      <h2 className="text-xl font-semibold"> {`New ${title}`}</h2>
      <Link href={href}>
        <XCircleIcon />
      </Link>
    </div>
  );
}

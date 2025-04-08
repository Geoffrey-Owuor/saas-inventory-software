import Link from "next/link";

export default function SubscriptionCard() {
  return (
    <div className="mt-10 px-2">
      <div className="rounded-lg bg-slate-900 p-2">
        <div className="border-b border-slate-600 pb-2">
          <p className="border-l-2 border-orange-500 pl-2 text-sm">
            Your premium plan's trial expires in{" "}
            <span className="font-semibold text-orange-500">13 days</span>
          </p>
        </div>
        <div className="flex space-x-3 text-sm">
          <button className="border-r border-slate-600 pr-3">
            Change Plan
          </button>
          <Link href="#">Upgrade</Link>
        </div>
      </div>
    </div>
  );
}

"use client";
import { CreditCardIcon, X } from "lucide-react";
import { useState } from "react";

export default function DashboardBanner() {
  const [hidden, setHidden] = useState(false);
  return (
    <div
      className={`${hidden ? "hidden" : "grid grid-cols-12 items-center border-b border-slate-200 bg-white px-16 py-5"}`}
    >
      {/* Icon */}
      <div className="col-span-2">
        <CreditCardIcon className="h-16 w-16 text-slate-500" />
      </div>
      {/* Text */}
      <div className="col-span-6">
        <h2 className="text-2xl font-bold">Start Accepting Online Payments</h2>
        <p>
          Businesses are moving towards online payments as they're easy, secure
          and fast. Try them for your business today.
        </p>
      </div>
      {/* Button */}
      <div className="col-span-3 ml-10">
        <button className="cursor-pointer rounded-lg bg-blue-600 px-8 py-2 text-sm text-white uppercase hover:bg-blue-700">
          Enable
        </button>
      </div>
      {/* Close Button */}
      <button
        onClick={() => setHidden((prev) => !prev)}
        className="ml-20 cursor-pointer hover:text-slate-500"
      >
        <X />
      </button>
    </div>
  );
}

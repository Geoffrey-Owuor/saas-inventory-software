import DashboardBanner from "@/components/dashboard/DashboardBanner";
import DashboardSummary from "@/components/dashboard/DashboardSummary";
import React from "react";

export default function DashboardPage() {
  return (
    <div>
      <DashboardBanner />
      <DashboardSummary />
    </div>
  );
}

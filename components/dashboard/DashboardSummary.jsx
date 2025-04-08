import InventorySummaryCard from "./InventorySummaryCard";
import SalesActivityCard from "./SalesActivityCard";

export default function DashboardSummary() {
  const SalesActivity = [
    {
      title: "To be Packed",
      Number: 0,
      Unit: "Qty",
      href: "#",
      color: "text-blue-600",
    },
    {
      title: "To be Shipped",
      Number: 0,
      Unit: "Pkgs",
      href: "#",
      color: "text-red-600",
    },
    {
      title: "To be Delivered",
      Number: 0,
      Unit: "Pkgs",
      href: "#",
      color: "text-green-600",
    },
    {
      title: "To be Invoiced",
      Number: 0,
      Unit: "Qty",
      href: "#",
      color: "text-orange-600",
    },
  ];

  const inventorySummary = [
    {
      title: "Quantity in Hand",
      number: 0,
    },
    {
      title: "Quantity to be Received",
      number: 0,
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-4 bg-white">
      {/* Sales Activity */}
      <div className="col-span-8 p-6">
        <h2 className="mb-6 text-xl">Sales Activity</h2>
        <div className="grid grid-cols-4 gap-4">
          {/* Card */}
          {SalesActivity.map((item, i) => {
            return <SalesActivityCard item={item} key={i} />;
          })}
        </div>
      </div>
      {/* Inventory Summary */}
      <div className="col-span-4 p-6">
        <h2 className="mb-6 text-xl">Inventory Summary</h2>
        {inventorySummary.map((item, i) => {
          return <InventorySummaryCard item={item} key={i} />;
        })}
      </div>
    </div>
  );
}

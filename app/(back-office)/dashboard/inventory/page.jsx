import FixedHeader from "@/components/dashboard/FixedHeader";
import OptionCard from "@/components/dashboard/OptionCard";
import {
  Award,
  Boxes,
  Component,
  ShirtIcon,
  WarehouseIcon,
} from "lucide-react";

export default function Inventory() {
  const optionCards = [
    {
      title: "Items",
      description: "Create standalone items and services that you buy and sell",
      link: "/dashboard/inventory/items/new",
      linkTitle: "New Item",
      enabled: true,
      icon: ShirtIcon,
    },
    {
      title: "Categories",
      description: "Bundle different items together and sell them as kits",
      link: "/dashboard/inventory/categories/new",
      linkTitle: "New Category",
      enabled: true,
      icon: Boxes,
    },
    {
      title: "Brands",
      description: "Tweak your brands for specific contacts or transactions",
      link: "/dashboard/inventory/brands/new",
      linkTitle: "New Brand",
      enabled: true,
      icon: Award,
    },
    {
      title: "Warehouse",
      description: "Tweak your warehouse for specific contacts or transactions",
      link: "/dashboard/inventory/warehouse/new",
      linkTitle: "New Warehouse",
      enabled: true,
      icon: WarehouseIcon,
    },
    {
      title: "Units",
      description: "Tweak your brands for specific contacts or transactions",
      link: "/dashboard/inventory/units/new",
      linkTitle: "New Unit",
      enabled: true,
      icon: Component,
    },
  ];

  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/new" />
      <div className="grid-col-1 mx-16 my-6 grid gap-6 lg:grid-cols-2">
        {optionCards.map((card, index) => {
          return <OptionCard optionData={card} key={index} />;
        })}
      </div>
    </div>
  );
}

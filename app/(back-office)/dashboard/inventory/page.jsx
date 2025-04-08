import FixedHeader from "@/components/dashboard/FixedHeader";
import OptionCard from "@/components/dashboard/OptionCard";
import { Boxes, Component, ScrollText, ShirtIcon } from "lucide-react";

export default function Inventory() {
  const optionCards = [
    {
      title: "Item Groups",
      description:
        "Create multiple variants of the same item using item groups",
      link: "/new",
      linkTitle: "New Item Group",
      enabled: true,
      icon: Boxes,
    },
    {
      title: "Items",
      description: "Create standalone items and services that you buy and sell",
      link: "/new",
      linkTitle: "New Item",
      enabled: true,
      icon: ShirtIcon,
    },
    {
      title: " Composite Items",
      description: "Bundle different items together and sell them as kits",
      link: "/new",
      linkTitle: "New Composite Item",
      enabled: true,
      icon: Component,
    },
    {
      title: "Price Lists",
      description:
        "Tweak your item prices for specific contacts or transactions",
      link: "/new",
      linkTitle: "New Composite Item",
      enabled: false,
      icon: ScrollText,
    },
  ];

  return (
    <div className="mt-12">
      <FixedHeader newLink="/dashboard/inventory/items/new" />
      <div className="grid-col-1 m-4 grid gap-6 lg:grid-cols-2">
        {optionCards.map((card, index) => {
          return <OptionCard optionData={card} key={index} />;
        })}
      </div>
    </div>
  );
}

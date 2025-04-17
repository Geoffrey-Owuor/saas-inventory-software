import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { ChevronDown } from "lucide-react";
import CollapsibleLink from "./CollapsibleLink";

export default function SidebarDropDownLink({ items, title, icon: Icon }) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="-mx-2 flex w-46 cursor-pointer items-center justify-between py-2 pr-2.5 pl-2.5 hover:text-blue-200">
        <div className="flex items-center space-x-2">
          <Icon className="h-4 w-4" />
          <span>{title}</span>
        </div>
        <ChevronDown className="mt-1 h-4 w-4" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        {items.map((item, index) => {
          return (
            <CollapsibleLink key={index} href={item.href} title={item.title} />
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
}

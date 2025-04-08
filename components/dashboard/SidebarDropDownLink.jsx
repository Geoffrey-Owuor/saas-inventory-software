import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { ChevronDown } from "lucide-react";
import CollapsibleLink from "./CollapsibleLink";

export default function SidebarDropDownLink({
  chevronClassName,
  items,
  title,
  icon: Icon,
}) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="-mx-2 flex items-center space-x-2 rounded-lg py-2 pr-2.5 pl-2.5 hover:bg-slate-700">
        <Icon className="h-4 w-4" />
        <span>{title}</span>
        <ChevronDown className={`${chevronClassName} mt-1 h-4 w-4`} />
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

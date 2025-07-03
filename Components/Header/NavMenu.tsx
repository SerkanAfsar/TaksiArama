"use client";
import { MenuData } from "@/Utils/Data";
import { cn } from "@/Utils/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMenu() {
  const pathName = usePathname();

  return (
    <nav className="hidden xl:block">
      <ul className="flex gap-4">
        {MenuData.map((item, index) => (
          <li key={index}>
            <Link
              title={item.title}
              className={cn(
                "after:bg-[url(/assets/images/linkicon.png)]",
                pathName == item.url ? "menuLinkItemActive" : "menuLinkItem",
              )}
              href={item.url}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

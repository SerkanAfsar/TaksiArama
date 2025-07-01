import { cn } from "@/Utils/utils";
import Link from "next/link";
import React from "react";

export type CustomButtonLinkTypes = React.ComponentPropsWithoutRef<
  typeof Link
> & {
  children: React.ReactNode;
};
export default function CustomButtonLink({
  children,
  href,
  className,
}: CustomButtonLinkTypes) {
  return (
    <Link
      href={href}
      className={cn(
        "border-fontColor inline-flex items-center justify-center rounded-2xl border-2 px-4 py-2 text-lg font-semibold",
        className && className,
      )}
    >
      {children}
    </Link>
  );
}

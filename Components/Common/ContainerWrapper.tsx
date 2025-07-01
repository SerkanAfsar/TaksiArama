import { cn } from "@/Utils/utils";
import React from "react";

export type CustomWrapperProps = React.HTMLAttributes<HTMLElement>;
export default function ContainerWrapper({
  children,
  className,
}: CustomWrapperProps) {
  return (
    <div className={cn("relative container", className && className)}>
      {children}
    </div>
  );
}

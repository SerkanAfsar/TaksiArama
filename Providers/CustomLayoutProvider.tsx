"use client";
import Header from "@/Components/Header";
import { usePathname } from "next/navigation";

export default function CustomLayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const isFixed = pathName == "/";
  return (
    <>
      <Header isFixed={isFixed} />
      <main>{children}</main>
    </>
  );
}

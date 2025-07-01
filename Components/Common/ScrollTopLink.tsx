"use client";
import Image from "next/image";
import img from "../../public/assets/images/scrollimg.png";
import { useEffect, useState } from "react";
import { cn } from "@/Utils";

export default function ScrollTopLink() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handler = () => {
      setIsScrolled(window.scrollY > 0 ? true : false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className={cn(
        "invisible fixed right-10 bottom-0 translate-y-1/3 cursor-pointer opacity-0 transition-all hover:translate-y-0",
        isScrolled && "visible opacity-100",
      )}
    >
      <Image src={img} alt="Taksi Durakları" width={60} height={72} />
    </div>
  );
}

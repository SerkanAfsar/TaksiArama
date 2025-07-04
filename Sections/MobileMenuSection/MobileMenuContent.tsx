"use client";
import Logo from "@/Components/Header/Logo";
import { useMobileMenuContext } from "@/Contexts/useMobileMenuContext";
import { CityType } from "@/Types";
import { cn, generateCityUrl } from "@/Utils";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function MobileMenuContent({ data }: { data: CityType[] }) {
  const { isOpened, setIsOpened } = useMobileMenuContext();
  const pathName = usePathname();
  const [value, setValue] = useState<string>("");
  const ref = useRef<HTMLInputElement | null>(null);

  useLayoutEffect(() => {
    document.body.style.overflow = isOpened ? "hidden" : "auto";
  }, [isOpened]);

  useEffect(() => {
    if (isOpened) {
      ref.current?.focus();
    } else {
      setValue("");
    }
  }, [isOpened]);

  useEffect(() => {
    setIsOpened(false);
  }, [pathName, setIsOpened]);

  const lastData = value
    ? data.filter((a) =>
        a.sehirAd.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
      )
    : data;

  return (
    <section
      className={cn(
        "invisible fixed inset-0 z-50 block opacity-0 transition-all before:absolute before:z-[-1] before:h-screen before:w-full before:bg-black/50 before:content-['']",
        isOpened && "visible opacity-100",
      )}
    >
      <div
        className={cn(
          "relative inset-0 right-auto h-full w-[300px] bg-black text-white transition-all",
          isOpened ? "ml-0" : "-ml-[300px]",
        )}
      >
        <div className="sticky top-0 right-0 left-0 flex flex-col gap-3 p-3">
          <div className="flex w-full items-center justify-between gap-3">
            <Logo />
            <X
              size={30}
              className="cursor-pointer"
              onClick={() => setIsOpened(false)}
            />
          </div>
        </div>
        <nav className="block h-auto max-h-screen w-full overflow-auto overscroll-contain text-sm font-semibold text-white">
          <ul className="relative flex w-full flex-col gap-3">
            <li className="sticky inset-0 mx-2 -mb-2 bg-black py-1 pb-2">
              <input
                type="text"
                ref={ref}
                value={value}
                className="bg-primary w-full rounded-md border p-2 text-sm text-black placeholder:text-sm placeholder:text-black"
                placeholder="İl Arayınız..."
                onChange={(e) => setValue(e.target.value)}
              />
            </li>
            {lastData.map((city, index) => (
              <li key={index} className="bg-black px-2">
                <Link
                  className="bg-primary flex items-center rounded-md p-3 text-black"
                  title={`${city.sehirAd} Taksi Durakları`}
                  href={generateCityUrl(city.sehirAd)}
                >
                  {city.sehirAd} Taksi Durakları
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}

import { useMobileMenuContext } from "@/Contexts/useMobileMenuContext";
import { cn } from "@/Utils";
import { useLayoutEffect } from "react";

export default function MobileMenuSection() {
  const { isOpened, setIsOpened } = useMobileMenuContext();

  useLayoutEffect(() => {
    document.body.style.overflow = isOpened ? "hidden" : "auto";
  }, [isOpened]);

  return (
    <section
      onClick={() => setIsOpened(false)}
      className={cn(
        "invisible fixed inset-0 z-50 block text-2xl text-red-600 opacity-0 transition-all before:absolute before:z-[-1] before:h-screen before:w-full before:bg-black/50 before:content-['']",
        isOpened && "visible opacity-100",
      )}
    >
      DENEME
    </section>
  );
}

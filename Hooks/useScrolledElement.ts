import { useEffect, useState } from "react";

export default function useScrolledElement(
  element: React.RefObject<HTMLElement | null>,
) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handler = () => {
      if (element && element.current) {
        setIsScrolled(window.scrollY >= element.current.clientHeight);
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [element]);

  return { isScrolled };
}

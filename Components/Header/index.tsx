import { cn } from "@/Utils/utils";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { useRef } from "react";
import useScrolledElement from "@/Hooks/useScrolledElement";
import { Menu } from "lucide-react";
import ContainerWrapper from "../Common/ContainerWrapper";
import { useMobileMenuContext } from "@/Contexts/useMobileMenuContext";

export type HeaderType = {
  isFixed: boolean;
};
export default function Header({ isFixed }: HeaderType) {
  const element = useRef<HTMLElement>(null);
  const { isScrolled } = useScrolledElement(element);

  const { setIsOpened } = useMobileMenuContext();
  return (
    <header
      ref={element}
      className={cn(
        "top-0 right-0 left-0 z-20 block w-full text-white",
        isFixed ? "fixed bg-black/80" : "bg-dark relative",
      )}
    >
      <ContainerWrapper className="flex items-center justify-between py-5">
        <Logo />
        <NavMenu />
        <Menu
          className="block xl:hidden"
          onClick={() => setIsOpened(true)}
          size={30}
        />
        <div
          className={cn(
            "bg-primary absolute right-0 bottom-0 left-0 block h-[4px] w-full translate-y-1/2 transition-all duration-300",
            isFixed ? "block" : "hidden",
            isScrolled ? "invisible opacity-0" : "visible opacity-100",
          )}
        ></div>
      </ContainerWrapper>
    </header>
  );
}

"use client";
import { createContext, use, useState } from "react";

type MobileMenuContextType = {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(
  undefined,
);

export default function MobileMenuContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <MobileMenuContext.Provider value={{ isOpened, setIsOpened }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export const useMobileMenuContext = () => {
  const context = use(MobileMenuContext);
  if (!context) {
    throw new Error("Context Not Provided");
  }
  return context;
};

"use client";
import { cn } from "@/Utils";
import React from "react";
import Select from "react-select";

export const customOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#FFC61A" // seçili olanın arka planı yeşil
      : "white",
    color: state.isSelected ? "white" : "black",
  }),
};

type CustomSelectProps = React.ComponentPropsWithoutRef<typeof Select> & {
  itemTitle?: string;
};

const CustomSelect = React.forwardRef<
  React.ElementRef<typeof Select>,
  CustomSelectProps
>(({ className, itemTitle, ...rest }, ref) => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-2">
      {itemTitle && <b>{itemTitle}</b>}
      <Select
        styles={customStyles}
        ref={ref}
        className={cn("block w-full", className && className)}
        {...rest}
      />
    </div>
  );
});
CustomSelect.displayName = "CustomSelect";

export default CustomSelect;

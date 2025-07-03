import { cn } from "@/Utils";
import { Check, CircleAlert } from "lucide-react";
import { title } from "process";

export type AlertType = {
  type: "Error" | "Success";
  message: string;
  title: string;
};
export default function Alert({ message, type }: AlertType) {
  return (
    <section className="flex h-40 w-1/3 flex-col items-center justify-center gap-3 rounded-md p-3 text-lg font-semibold text-black shadow-2xl">
      <h3
        className={cn(
          "flex items-center justify-center gap-3 text-2xl font-bold uppercase",
          type == "Success" ? "text-green-600" : "text-[#9F340A]",
        )}
      >
        {type == "Success" ? <Check size={30} /> : <CircleAlert size={30} />}
        {title}
      </h3>
      <p>{message}</p>
    </section>
  );
}

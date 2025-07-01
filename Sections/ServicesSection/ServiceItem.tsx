import { ServicesData } from "@/Utils/Data";
import Image from "next/image";

export type ServiceItemType = (typeof ServicesData)[0];
export default function ServiceItem({ item }: { item: ServiceItemType }) {
  return (
    <div className="flex flex-col gap-3 border-dotted border-gray-500 text-center max-xl:nth-of-type-[2n]:border-none lg:border-r lg:px-6 xl:border-r">
      <div className="flexCenter h-[70px]">
        <Image src={item.image} width={70} height={70} alt={item.title} />
      </div>
      <h4 className="text-xl font-bold uppercase">{item.title}</h4>
      <p className="text-fontColor text-sm leading-6">{item.content}</p>
    </div>
  );
}

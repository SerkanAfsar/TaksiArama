import ContainerWrapper from "@/Components/Common/ContainerWrapper";
import CustomButtonLink from "@/Components/UI/CustomButtonLink";
import InfoDetailItem from "./InfoDetailItem";
import { MapPin, MapPinHouse, Phone } from "lucide-react";

export default function InfoDetailSection() {
  return (
    <section className="bg-primary block w-full" data-spacing="sm">
      <ContainerWrapper className="grid grid-cols-none items-center gap-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:items-center">
        <InfoDetailItem
          content="Telefon Bilgileri"
          icon={<Phone size={25} />}
        />
        <InfoDetailItem
          content="Adres Bilgileri"
          icon={<MapPinHouse size={25} />}
        />
        <InfoDetailItem
          content="Harita Bilgileri"
          icon={<MapPin size={25} />}
        />
        <CustomButtonLink
          className="rounded-full px-8 py-4 font-bold uppercase transition-all hover:bg-white hover:text-black md:col-span-3 lg:col-span-1"
          href={"/taksi-duraklari"}
        >
          Taksi Listesi
        </CustomButtonLink>
      </ContainerWrapper>
    </section>
  );
}

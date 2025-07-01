import ContainerWrapper from "@/Components/Common/ContainerWrapper";
import { ServicesData } from "@/Utils/Data";
import ServiceItem from "./ServiceItem";

export default function ServicesSection() {
  return (
    <section className="my-5 block w-full bg-white" data-spacing="lg">
      <ContainerWrapper>
        <div className="sectionTitle">
          <h3>Taksi Durakları</h3>
          <h4> İl İlçe Taksi Durakları Listesi</h4>
        </div>
      </ContainerWrapper>
      <ContainerWrapper className="font-OpenSans mt-10 grid gap-12 lg:grid-cols-2 xl:grid-cols-4 xl:gap-0">
        {ServicesData.map((item, index) => (
          <ServiceItem item={item} key={index} />
        ))}
      </ContainerWrapper>
    </section>
  );
}

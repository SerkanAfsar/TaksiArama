import ContainerWrapper from "@/Components/Common/ContainerWrapper";
import SearchArea from "./SearchArea";
import SliderArea from "./SliderArea";
import { GetCityListService } from "@/Services/CityService";
import { CityType } from "@/Types";

export default async function HeroSection() {
  const cityListResult = await GetCityListService();
  const data: CityType[] = cityListResult.success
    ? (cityListResult.entities as CityType[])
    : [];
  return (
    <section className="relative z-10 block h-screen max-h-screen w-full before:absolute before:inset-0 before:z-10 before:bg-black/30 before:content-['']">
      <SliderArea />
      <ContainerWrapper style={{ padding: "0px" }}>
        <SearchArea cityList={data} />
      </ContainerWrapper>
    </section>
  );
}

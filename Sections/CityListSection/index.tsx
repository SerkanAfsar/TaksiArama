import { GetCityListService } from "@/Services/CityService";
import { CityType } from "@/Types";
import CityList from "./CityList";

export default async function CityListSection() {
  const result = await GetCityListService();
  if (!result.success) {
    throw new Error(result.errors.join(","));
  }
  const data = result.entities as CityType[];

  return (
    <section
      className="relative block w-full bg-[url(/assets/images/bgimage.jpg)] bg-fixed bg-[50%_13px] text-white before:absolute before:inset-0 before:z-0 before:bg-black/50 before:content-['']"
      data-spacing="lg"
    >
      <div className="relative container">
        <div className="sectionTitle mb-5">
          <h3>Şehirler Listesi</h3>
          <h4 className="mt-2 text-3xl leading-8 text-white lg:text-5xl">
            Türkiye İl İlçe Taksi Durakları Listesi
          </h4>
        </div>
        <CityList data={data} />
      </div>
    </section>
  );
}

import {
  GetCityDetailResultService,
  GetDistrictListByCitySlug,
} from "@/Services/CityService";
import { CityType } from "@/Types";
import { replaceSlugUrl, slugTaksiUrl } from "@/Utils";

import { notFound } from "next/navigation";

import WrapperAside from "./Components/WrapperAside";
import WrapperContent from "./Components/WrapperContent";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import ContainerWrapper from "@/Components/Common/ContainerWrapper";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  const citySlugText = replaceSlugUrl(slug[0]);

  const result = await GetCityDetailResultService({ citySlugText });
  if (result.statusCode == 404) {
    return notFound();
  }

  if (!result.success) {
    throw new Error(result.errors.join(","));
  }

  const city = result.entity as CityType;
  const districtList = GetDistrictListByCitySlug(city);

  if (!districtList) {
    return notFound();
  }

  if (slug.length == 2) {
    const isDistrictExist = districtList
      ?.map((a) => slugTaksiUrl(a))
      .includes(slug[1]);

    if (!isDistrictExist) {
      return notFound();
    }
  }

  if (slug.length > 2) {
    return notFound();
  }

  const districtName =
    slug.length == 2
      ? districtList.find((a) => slugTaksiUrl(a) == slug[1])
      : undefined;

  return (
    <>
      <BreadCrumb cityName={city.sehirAd} districtName={districtName} />
      <section className="my-5 block w-full">
        <ContainerWrapper className="mt-5 flex flex-col gap-6 lg:flex-row">
          <WrapperAside cityName={city.sehirAd} districtList={districtList} />
          <WrapperContent>{children}</WrapperContent>
        </ContainerWrapper>
      </section>
    </>
  );
}

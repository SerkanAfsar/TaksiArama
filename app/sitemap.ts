import type { MetadataRoute } from "next";

import { envVariables, generateCityUrl, generateDistrictUrl } from "@/Utils";
import {
  GetCityDetailResultService,
  GetCityListService,
  GetDistrictListByCitySlug,
} from "@/Services/CityService";
import { CityType } from "@/Types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const arr: MetadataRoute.Sitemap = [];

  const result = await GetCityListService();

  const cityData = result.entities as CityType[];

  for (const city of cityData) {
    arr.push({
      url: `${envVariables.NEXT_PUBLIC_SITE_NAME}${generateCityUrl(city.sehirAd)}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    });

    const districtListResult = await GetCityDetailResultService({
      citySlugText: city.sehirSlug,
    });

    const districtList = GetDistrictListByCitySlug(
      districtListResult.entity as CityType,
    );

    for (const district of districtList) {
      arr.push({
        url: `${envVariables.NEXT_PUBLIC_SITE_NAME}${generateDistrictUrl(city.sehirAd, district)}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.7,
      });
    }
  }

  return [
    {
      url: envVariables.NEXT_PUBLIC_SITE_NAME,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${envVariables.NEXT_PUBLIC_SITE_NAME}/taksi-duraklari`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    ...arr,
  ];
}

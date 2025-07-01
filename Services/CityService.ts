import { ApiUrlList } from "@/Utils/Data";
import BaseService from "./BaseService";
import { CityType, ResponseResult, TaxiType } from "@/Types";

export async function GetCityListService() {
  const cityResult = (await BaseService({
    url: ApiUrlList.CityListUrl,
  })) as ResponseResult<CityType>;
  return cityResult;
}

export async function GetCityDetailResultService({
  citySlugText,
}: {
  citySlugText: string;
}) {
  const cityResult = (await BaseService({
    url: `${ApiUrlList.CityDetailUrlUrl}?city=${citySlugText}`,
  })) as ResponseResult<CityType>;
  return cityResult;
}

export function GetDistrictListByCitySlug(cityResult: CityType): string[] {
  const taxiList = cityResult.taxies as TaxiType[];
  const arr = new Set(taxiList.map((a) => a.ilce));
  return [...arr];
}

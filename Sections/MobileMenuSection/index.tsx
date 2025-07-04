import { GetCityListService } from "@/Services/CityService";
import MobileMenuContent from "./MobileMenuContent";
import { CityType } from "@/Types";

export default async function MobileMenuSection() {
  const result = await GetCityListService();
  if (!result.success) {
    throw new Error(result.errors.join(","));
  }
  const data = result.entities as CityType[];

  return <MobileMenuContent data={data} />;
}

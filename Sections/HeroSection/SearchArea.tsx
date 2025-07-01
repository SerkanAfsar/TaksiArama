"use client";
import CustomSelect, { customOptions } from "@/Components/UI/CustomSelect";
import img from "../../public/assets/images/caricon1.png";
import Image from "next/image";
import { CityType, ResponseResult } from "@/Types";
import { useEffect, useState } from "react";
import { GetDistrictListByCitySlug } from "@/Services/CityService";
import { useRouter } from "nextjs-toploader/app";
import { envVariables, generateCityUrl, generateDistrictUrl } from "@/Utils";

export type OptionsType = (typeof customOptions)[0];
export default function SearchArea({ cityList }: { cityList: CityType[] }) {
  const router = useRouter();
  const cityListData: OptionsType[] = cityList.map((city) => ({
    label: city.sehirAd,
    value: String(city.id),
  }));

  const [selectedCity, setSelectedCity] = useState<OptionsType | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<OptionsType | null>(
    null,
  );
  const [districtList, setDistrictList] = useState<OptionsType[]>([]);

  useEffect(() => {
    if (selectedCity) {
      setDistrictList([]);
      setSelectedDistrict(null);
      const handler = async () => {
        const response = await fetch("/api/districts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            ClientId: envVariables.NEXT_PUBLIC_CLIENT_ID,
            ClientSecret: envVariables.NEXT_PUBLIC_CLIENT_SECRET,
          },
          body: JSON.stringify({
            cityName: selectedCity.label,
          }),
        });
        const result: ResponseResult<CityType> = await response.json();
        if (result.success) {
          const distictListData = GetDistrictListByCitySlug(
            result.entity as CityType,
          );
          setDistrictList(() => {
            return (
              distictListData?.map((district) => ({
                label: district,
                value: district,
              })) || []
            );
          });
        }
      };
      handler();
    } else {
      setSelectedDistrict(null);
      setDistrictList([]);
    }
  }, [selectedCity]);

  const handleRoute = () => {
    if (selectedCity) {
      return router.push(
        selectedDistrict
          ? generateDistrictUrl(selectedCity.label, selectedDistrict.label)
          : generateCityUrl(selectedCity.label),
      );
    }
  };

  return (
    <div className="searchArea">
      <h3 className="text-3xl font-bold">
        TAKSİ ARAMA <span className="text-primary">SERVİSİ</span>
      </h3>
      <div className="flex w-full items-center justify-center">
        <div className="bg-primary rounded-md p-3">
          <Image src={img} alt="Taksi Arama" width={80} height={30} />
        </div>
      </div>
      <div className="flex w-full gap-3">
        <CustomSelect
          options={cityListData}
          value={selectedCity}
          placeholder="İl Seçiniz"
          onChange={(val) => setSelectedCity(val as OptionsType)}
          itemTitle="İl Seçiniz"
          noOptionsMessage={() => "İl Bulunamadı..."}
          isClearable
        />
        <CustomSelect
          isClearable
          itemTitle="İlçe Seçiniz"
          placeholder="İlçe Seçiniz"
          noOptionsMessage={() => "İlçe Bulunamadı..."}
          value={selectedDistrict}
          onChange={(val) => setSelectedDistrict(val as OptionsType)}
          options={districtList}
        />
      </div>
      <button
        type="button"
        onClick={handleRoute}
        className="bg-primary flex w-full cursor-pointer items-center justify-center rounded-md p-2 text-lg font-semibold text-black"
      >
        TAKSİ ARA
      </button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nam
        numquam neque dolores at quo provident aut tempore illum dicta?
      </p>
    </div>
  );
}

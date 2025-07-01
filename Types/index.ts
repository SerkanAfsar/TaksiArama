export type MenuItemType = {
  url: string;
  title: string;
};

export type EnvType = {
  NEXT_PUBLIC_API_URL: string;
  NEXT_PUBLIC_CLIENT_ID: string;
  NEXT_PUBLIC_CLIENT_SECRET: string;
  NEXT_PUBLIC_SITE_NAME: string;
};

export type ResponseResult<T> = {
  success: boolean;
  entity?: T | null;
  entities?: T[] | null;
  errors: string[];
  statusCode: number;
};

export type CityType = {
  sehirAd: string;
  sehirSlug: string;
  taxies: TaxiType[];
  id: number;
};

export type TaxiType = {
  cityId: number;
  durakAd: string;
  durakAdres: string;
  durakTel: string;
  sehir: string;
  ilce: string;
  latitude: number;
  longitude: number;
  id: number;
};

export type CityUrlType = `/taksi-duraklari/${string}`;

export type DistrictUrlType = `/taksi-duraklari/${string}/${string}`;

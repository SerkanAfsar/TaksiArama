import { CityUrlType, DistrictUrlType, EnvType, ResponseResult } from "@/Types";
import clsx, { ClassValue } from "clsx";
import slugify from "slugify";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};

export const envVariables: EnvType = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL!,
  NEXT_PUBLIC_CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID!,
  NEXT_PUBLIC_CLIENT_SECRET: process.env.NEXT_PUBLIC_CLIENT_SECRET!,
  NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME!,
};

export function errHandler<T>(err: unknown): ResponseResult<T> {
  const errResponse: ResponseResult<T> = {
    statusCode: 500,
    success: false,
    entity: null,
    entities: null,
    errors: [],
  };
  if (typeof err == "string") {
    errResponse.errors = [err];
  } else if (err instanceof Error) {
    errResponse.errors = [err.message];
  } else {
    errResponse.errors = ["An Error Accoured"];
  }
  return errResponse;
}

export function SlugUrlPath(path: string) {
  if (path) {
    return slugify(path, {
      replacement: "-", // replace spaces with replacement character, defaults to `-`
      remove: undefined, // remove characters that match regex, defaults to `undefined`
      lower: true, // convert to lower case, defaults to `false`
      strict: false, // strip special characters except replacement, defaults to `false`
      locale: "tr", // language code of the locale to use
      trim: true, // trim leading and trailing replacement chars, defaults to `true`
    });
  }
  return "Not Provided";
}

export const generateCityUrl = (cityName: string): CityUrlType => {
  return `/taksi-duraklari/${slugify(`${cityName.toLocaleLowerCase()} taksi durakları`)}`;
};

export const generateDistrictUrl = (
  cityName: string,
  districtName: string,
): DistrictUrlType => {
  return `/taksi-duraklari/${slugify(`${cityName.toLocaleLowerCase()} taksi durakları`)}/${slugify(`${districtName.toLocaleLowerCase()} taksi durakları`)} `;
};

export const replaceSlugUrl = (val: string) => {
  return val.replace("-taksi-duraklari", "");
};

export const slugTaksiUrl = (val: string) => {
  return slugify(`${val.toLocaleLowerCase()} taksi durakları`);
};

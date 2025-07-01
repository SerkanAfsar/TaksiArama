import { ResponseResult } from "@/Types";
import { envVariables, errHandler } from "@/Utils/utils";

export default async function BaseService({ url }: { url: string }) {
  const pathUrl = `${envVariables.NEXT_PUBLIC_API_URL}/${url}`;

  try {
    const response = await fetch(pathUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        ClientId: envVariables.NEXT_PUBLIC_CLIENT_ID,
        ClientSecret: envVariables.NEXT_PUBLIC_CLIENT_SECRET,
      },
    });
    const result = (await response.json()) as ResponseResult<any>;
    return result;
  } catch (err: unknown) {
    return errHandler<string>(err);
  }
}
